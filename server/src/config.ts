export const NODE_ENV = process.env.NODE_ENV || 'development';
export const JWT_ACCESS_SECRET =
  process.env.JWT_ACCESS_SECRET || 'accessSecret';
export const JWT_REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET || 'refreshSecret';
export const JWT_ACCESS_EXPIRES = process.env.JWT_ACCESS_EXPIRES || '1d';
export const JWT_REFRESH_EXPIRES = process.env.JWT_REFRESH_EXPIRES || '30d';

export const PORT = 8005;
