import '@/styles/globals.css'
import Sidebar from '../components/Sidebar'
import { GlobalProvider } from '@/context/GlobalState'

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </GlobalProvider>
  )
}
