export interface RootObject {
  user: User;
}

export interface User {
  createdAt: Date;
  email: string;
  full_name: string;
  id: string;
  images: Image[];
  updatedAt: Date;
  username: string;
}

export interface Image {
  id: string;
  file: string;
  width: number;
  height: number;
}
