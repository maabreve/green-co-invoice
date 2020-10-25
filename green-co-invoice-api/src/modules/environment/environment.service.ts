import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
import { EnvironmentData } from './interfaces/environment-data.interface';

@Injectable()
export class EnvironmentService {
  private envs: EnvironmentData;

  constructor() {
    const environment = process.env.NODE_ENV || 'development';
    let data: Record<string, any> = {};
    try {
      if (environment === 'development') {
        data = dotenv.parse(fs.readFileSync('.env'));
      } else {
        data = {
          ...data,
          ...process.env,
        };
      }
    } catch (e) {
      console.warn(e);
    }

    data.APP_ENV = environment;
    data.APP_DEBUG = data.APP_DEBUG === 'true';
    data.RDS_PORT = parseInt(data.RDS_PORT, 10);

    this.envs = data as EnvironmentData;
  }

  getEnvs(): EnvironmentData {
    return this.envs;
  }

  isDevelopment(): boolean {
    return this.envs.APP_ENV === 'development';
  }

  isProduction(): boolean {
    return this.envs.APP_ENV === 'production';
  }
}
