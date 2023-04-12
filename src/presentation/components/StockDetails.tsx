import { Stock } from "@/domain/entity/Stock"
import styled from "styled-components"

const Stock = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-weight: bold;
  padding: 2rem;
  font-family: Roboto, sans-serif;
  border-bottom: 1px solid #CCCCCC;
  border-opacity: 0.25;

  @media(max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.75rem;
  }
`

interface PriceChangeProps {
  priceChange: number,
}

const PriceChange = styled.p<PriceChangeProps>`
  color: ${props => props.priceChange > 0 ? '#4CA7A2' : '#DF484C'};
  display: flex;
  font-weight: lighter;
  font-size: small;
  gap: 0.5rem;
`;

const StockDetails: React.FC<Stock> = ({symbol, quotePrice, priceChange, percentageChange}) => {
  return (
    <Stock>
        <div>
          <p>{symbol}</p>
          <p style={{color: "gray", fontWeight: "lighter", fontSize: "small"}}>QTY: 250</p>
        </div>
        <div>
            <p style={{textAlign: "right"}}>{quotePrice}</p>
            <PriceChange priceChange={priceChange}>
              <span>
                {`(${priceChange})`}
              </span> 
              {`${percentageChange}%`}
            </PriceChange>
        </div>
    </Stock>
  )
}

export default StockDetails