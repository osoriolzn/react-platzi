import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ShoppingContext = createContext()

export function ShoppingProvider ({ children }) {
  const [count, setCount] = useState(0)
  
  return (
    <ShoppingContext.Provider value={{
        count,
        setCount
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

ShoppingProvider.propTypes = {
  children: PropTypes.object
}
