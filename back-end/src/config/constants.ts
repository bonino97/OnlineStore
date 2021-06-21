import environment from './environments';

if (process.env.NODE_ENV !== 'production') {
  const env = environment;
}

export const SECRET_KEY = process.env.SECRET_KEY || '0nl1n3-st0r3';
export enum COLLECTIONS {
  USERS = 'users',
}

export enum MESSAGES {
  VERIFY_TOKEN_FAILED = 'Invalid token, sign in again.',
}

export enum EXPIRE_TIME {
  HOUR = 60 * 60,
  DAY = HOUR * 24,
  FIFTEEN_MINS = HOUR / 4,
  HALF_HOUR = HOUR / 2,
  THREE_DAYS = DAY * 3,
}
