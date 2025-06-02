export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
  size?: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  productCount: number;
}

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  tags: string[];
}

export interface SortOption {
  label: string;
  value: string;
}