import { useEffect, useState } from "react"
import { getStocks } from "@/infrastructure/usecase/getStocks"
import { Stock } from "@/domain/entity/Stock"
import StockDetails from "./StockDetails"
import { StocksContainer } from "./Layouts/StocksContainer"

const StockList = () => {
  const [stocks, setStocks] = useState<Stock[]>([])

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await getStocks()
      setStocks(response as unknown as Stock[])
      console.log("stocks", response)
    }

    fetchStocks()

    const refreshInterval = setInterval(() => {
      fetchStocks();
    }, 10000);
 
    return () => clearInterval(refreshInterval);
  }, [])

  return (
    <StocksContainer>
        <p style={{color: "#CCCCCC", fontWeight: "bold", fontFamily: "Roboto, sans-serif"}}>Stocks</p>
        {stocks ? stocks.map((stock:Stock) => (
            <StockDetails 
                key={stock.symbol} 
                symbol={stock.symbol} 
                quotePrice={stock.quotePrice}
                priceChange={stock.priceChange}
                percentageChange={stock.percentageChange}
            />
        )): (
          <h1>Sorry, something went wrong.</h1>
        )}
    </StocksContainer>
  )
}

export default StockList