import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: InputJsonValue;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
