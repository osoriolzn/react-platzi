import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ShoppingContext = createContext()

export function ShoppingProvider ({ children }) {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [shoppingCarts, setShoppingCarts] = useState([])
  
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  return (
    <ShoppingContext.Provider value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        productToShow,
        setProductToShow,
        shoppingCarts,
        setShoppingCarts
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

ShoppingProvider.propTypes = {
  children: PropTypes.object
}
