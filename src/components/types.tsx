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
  featured: string;
}

export interface Roles {
  id: number;
  description: string;
}

export interface Carts {
  cartId: string;
  cartDate: string;
  cartAmount: string;
  userName: string;
  userSurname: string;
  productName: string;
}
