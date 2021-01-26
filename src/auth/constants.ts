import * as dotenv from 'dotenv';

export const jwtConstants = {
    secret: process.env.JWT_SECRET_KEY || 'secretKey',
  };