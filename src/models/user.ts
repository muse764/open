export interface UserModel {
  id: string;
  username: string;
  images: {
    id: string;
    file: string;
    width: number;
    height: number;
  }[];
}

export interface UsersModel {
  users: UserModel[];
}
