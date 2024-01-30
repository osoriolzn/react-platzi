import { useContext } from 'react'
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingProvider, ShoppingContext } from '../../context'
import Home from '../home'
import NotFound from '../not-found'
import Account from '../account'
import Order from '../order'
import Orders from '../orders'
import SignIn from '../sign-in'
import NavBar from '../../components/navbar'
import CheckoutSideMenu from '../../components/checkout-side-menu'

const AppRouters = () => {
  const { account, signOut } = useContext(ShoppingContext)

  const accountLS = localStorage.getItem('account')
  const parsedAccount = JSON.parse(accountLS)
  const signOutLS = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOutLS)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(account).length === 0

  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSigOut = signOut || parsedSignOut

  const routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSigOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/account', element: <Account /> },
    { path: '/order', element: <Order /> },
    { path: '/orders', element: <Orders /> },
    { path: '/orders/last', element: <Order /> },
    { path: '/orders/:id', element: <Order /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])

  return routes
}

function App() {
  // initializeLocalStorage()

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
