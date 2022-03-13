import dotenvExtended from 'dotenv-extended';
import dotenvParseVariables from 'dotenv-parse-variables';

const environment = process.env.NODE_ENV || 'development';
const pathDir = `./src/config/envs/${environment}.env`;

const env = dotenvExtended.load({
  path: pathDir,
  defaults: './src/config/envs/defaults.env',
  schema: './src/config/envs/schema.env',
  includeProcessEnv: true,
  silent: false,
  errorOnMissing: true,
  errorOnExtra: true
});

const parsedEnv = dotenvParseVariables(env);

interface Config {
  environment: string;
  port: number;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUsername: string;
  dbPassword: string;
  expressProdLogger: boolean;
  expressDevLogger: boolean;
}

const config: Config = {
  environment: environment as string,
  port: parsedEnv.PORT as number,
  dbHost: parsedEnv.DB_HOST as string,
  dbPort: parsedEnv.DB_PORT as number,
  dbName: parsedEnv.DB_NAME as string,
  dbUsername: parsedEnv.DB_USERNAME as string,
  dbPassword: parsedEnv.DB_PASSWORD as string,
  expressDevLogger: parsedEnv.EXPRESS_DEV_LOGGER as boolean,
  expressProdLogger: parsedEnv.EXPRESS_LOGGER as boolean
};

export default config;
