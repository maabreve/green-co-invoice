export interface EnvironmentData {

  // Application Envs
  APP_ENV?: string;
  APP_DEBUG?: boolean;
  GLOBAL_ROUTES_PREFIX: string;

  // Redis Envs
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASSWORD?: string;
}
