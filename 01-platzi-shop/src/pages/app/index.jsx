import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingProvider } from '../../context'
import Home from '../home'
import NotFound from '../notfound'
import Account from '../account'
import Order from '../order'
import Orders from '../orders'
import SignIn from '../signin'
import NavBar from '../../components/navbar'
import CheckoutSideMenu from '../../components/checkout-side-menu'
import './App.css'

const AppRouters = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/*', element: <NotFound /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/orders/last', element: <Order /> },
    { path: '/orders/:id', element: <Order /> },
    { path: '/signin', element: <SignIn /> }
  ])

  return routes
}

function App() {
  return (
    <ShoppingProvider>
      <BrowserRouter>
        <AppRouters />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingProvider>
  )
}

export default App
