export interface LoginResponse {
  token: string;
  id: number;
  username: string;
  email: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  stock: number;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
}
