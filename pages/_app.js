import Layouts from '../Components/Layouts'
import '../styles/globals.css'
import '../styles/spinners.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts >
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
