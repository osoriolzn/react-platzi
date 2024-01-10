import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ShoppingContext = createContext()

export function ShoppingProvider ({ children }) {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  
  return (
    <ShoppingContext.Provider value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

ShoppingProvider.propTypes = {
  children: PropTypes.object
}
