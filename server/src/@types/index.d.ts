interface IRefreshTokenPayload {
  id: string;
  tokenVersion: number;
}

interface IAccessTokenPayload {
  id: string;
  role: import("@prisma/client").Role;
}
