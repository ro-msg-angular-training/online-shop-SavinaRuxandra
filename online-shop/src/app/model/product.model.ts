import { ProductCategory } from "./productCategory.model";
import { Supplier } from "./supplier.model";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  weight: number;
  category: ProductCategory;
  supplier: Supplier;
  imageUrl: string
};
