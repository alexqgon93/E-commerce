export interface Users {
  id: number;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  date_birth: string;
}

export interface Categories {
  id: number;
  name: string;
  description: string;
  picture: string;
}

export interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
  category: number;
}

export interface Roles {
  id: number;
  description: string;
}
