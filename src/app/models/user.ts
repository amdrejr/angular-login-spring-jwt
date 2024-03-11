import { Role } from "./role";

export interface User {
  id: number;
  username: string;
  enabled: boolean;
  authorities: Role[];
}
