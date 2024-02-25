import dotenv from 'dotenv';
import path from 'path';

import { get } from 'env-var';

const loadEnvironmentConfig = (): void => {
  const environment = process.env.NODE_ENV ?? 'dev';

  let envFileName = '.env.dev';

  if (environment === 'prod') envFileName = '.env';
  else if (environment === 'test') envFileName = '.env.test';

  let envFilePath = path.resolve(process.cwd(), envFileName);

  if (environment === 'prod')
    envFilePath = path.resolve(process.cwd(), 'dist', envFileName);

  const result = dotenv.config({ path: envFilePath });

  if (result.error) {
    console.error(`-> Error loading ${envFileName}:`, result.error);
    process.exit(1);
  }

  console.log(`\nFile ${envFileName} loaded successfully`);
};

loadEnvironmentConfig();

export const environment = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: get('PORT').required().asPortNumber(),
};
