import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'

export const ShoppingContext = createContext()

import responseItem from '../mocks/with-results.json'
// import withoutResult from '../mocks/not-results.json'

// const URL = 'https://api.escuelajs.co/api/v1/products'

export function ShoppingProvider ({ children }) {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})
  const [shoppingCarts, setShoppingCarts] = useState([])
  const [order, setOrder] = useState([])
  const [search, setSearch] = useState('')
  const [searchCategory, setSearchCategory] = useState('')
  
  useEffect(() => {
    const data = responseItem
    setItems(data)
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(data => setItems(data))
  }, [])

  const filteredTitle = (items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
  }

  const filteredCaregory = (items, searchCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchCategory.toLowerCase()))
  }

  const filter = (searchType, items, search, searchCategory) => {
    if (!searchType) {
      return items
    }

    if (searchType === 'TITLE') {
      return filteredTitle(items, search)
    }

    if (searchType === 'CATEGORY') {
      return filteredCaregory(items, searchCategory)
    }

    if (searchType === 'TITLE_AND_CATEGORY') {
      return filteredCaregory(items, searchCategory).filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }    
  }

  useEffect(() => {
    if (!search && !searchCategory) setFilteredItems(filter(null, items, search, searchCategory))
    if (search && !searchCategory) setFilteredItems(filter('TITLE', items, search, searchCategory))
    if (!search && searchCategory) setFilteredItems(filter('CATEGORY',items, search, searchCategory))
    if (search && searchCategory) setFilteredItems(filter('TITLE_AND_CATEGORY',items, search, searchCategory))
  }, [items, search, searchCategory])
  
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  return (
    <ShoppingContext.Provider value={{
        items,
        filteredItems,
        count,
        order,
        isProductDetailOpen,
        isCheckoutSideMenuOpen,
        productToShow,
        shoppingCarts,
        search,
        searchCategory,
        setItems,
        setFilteredItems,
        setCount,
        setOrder,
        setProductToShow,
        setShoppingCarts,
        setSearch,
        setSearchCategory,
        openProductDetail,
        closeProductDetail,
        openCheckoutSideMenu,
        closeCheckoutSideMenu
      }}
    >
      {children}
    </ShoppingContext.Provider>
  )
}

ShoppingProvider.propTypes = {
  children: PropTypes.object
}
