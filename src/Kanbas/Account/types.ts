// src/Kanbas/Account/types.ts

export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  dob?: string;
  role?: string;
}
