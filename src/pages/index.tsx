import Head from 'next/head'
import StockList from '@/presentation/components/StockList';
import { FlexCol } from '@/presentation/components/Layouts/FlexColContainer';
import FooterNav from '@/presentation/components/FooterNav';

export default function Home() {
  return (
    <>
      <Head>
        <title>50Fin</title>
        <meta name="description" content="Stocks app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlexCol>
          <StockList />
          <FooterNav />
      </FlexCol>
    </>
  )
}
