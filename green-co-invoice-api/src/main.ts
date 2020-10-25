import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit'; // Express rate limit
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as swStats from 'swagger-stats';
import * as compression from 'compression';
import { EnvironmentService } from './modules/environment//environment.service';
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
 const app = await NestFactory.create(AppModule);

  app
    .use(helmet())
    .use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      })
    )
    .use(swStats.getMiddleware({}))
    .use(compression())
    .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );

  app.setGlobalPrefix(new EnvironmentService().getEnvs().GLOBAL_ROUTES_PREFIX);
  app.enableCors();


  const options = new DocumentBuilder()
    .setTitle('Green Co. Invoice Api')
    .setDescription('Green Co. Invoice Api description')
    .setVersion('1.0')
    .addTag('nestJs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  console.log('API running - PORT', port)

  await app.listen(port);
}

bootstrap();
