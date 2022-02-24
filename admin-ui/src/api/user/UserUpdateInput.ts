import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: InputJsonValue;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
