import { OrderDetail } from "./order-detail.model"

export interface OrderInput {
  customer: string;
  products: OrderDetail[];
};
