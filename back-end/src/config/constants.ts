import environment from './environments';

if (process.env.NODE_ENV !== 'production') {
  const env = environment;
}

export const SECRET_KEY = process.env.SECRET_KEY || '0nl1n3-st0r3';
