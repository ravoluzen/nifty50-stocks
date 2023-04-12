import { StockRepository } from "../repository/StockRepository";
import axios from "axios";
import { Stock } from "@/domain/entity/Stock";

const options = {
  method: 'GET',
  url: 'https://latest-stock-price.p.rapidapi.com/price',
  params: {Indices: 'NIFTY 50'},
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_STOCKS_API_KEY,
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
  }
};

export async function getStocks(): Promise<StockRepository> {
    try {
      const response = await axios.request(options)
      const data = await response.data.map((stock: any) => ({
          symbol: stock.symbol,
          quotePrice: stock.lastPrice,
          priceChange: stock.change,
          percentageChange: stock.pChange
  
      }))
      return data      
    } catch (error) {
        console.log("Error faced while fetching stocks", error)
        throw new Error("Failed to fetch stocks")
    }

  }
  