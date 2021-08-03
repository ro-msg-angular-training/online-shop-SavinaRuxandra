import { OrderDetail } from "./order-detail.model"
import { User } from "./user.model";

export interface OrderInput {
  customer: User
  products: OrderDetail[]
};
