import '../styles/globals.css'
import Header from '../layout components/Header'
import Navbar from '../layout components/Navbar'
import HeadInfo from '../layout components/HeadInfo'

function MyApp({ Component, pageProps }) {
  return <>
            <HeadInfo/>
            <Header/>
            <Navbar/>
            <Component {...pageProps} />
         </>

}

export default MyApp
