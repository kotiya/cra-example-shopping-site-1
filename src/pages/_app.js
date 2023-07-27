import 'bootstrap/dist/css/bootstrap.css'
import '../components/Cart/Cart.css'
import '../components/Product/Product.css'
import '../components/ProductList/ProductList.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>React Shop</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
