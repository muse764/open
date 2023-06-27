export interface RootObject {
  limit: number;
  offset: number;
  total: number;
  users: User[];
}

export interface User {
  id: string;
  images: Image[];
  username: string;
}

export interface Image {
  id: string;
  file: string;
  width: number;
  height: number;
}
