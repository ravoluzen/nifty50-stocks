import { Stock } from "../../domain/entity/Stock";

export interface StockRepository {
  getStocks(): Promise<Stock[]>;
}
