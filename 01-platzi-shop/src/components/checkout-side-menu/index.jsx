import { XMarkIcon } from '@heroicons/react/24/solid'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import OrderCard from '../../components/ordercard'
import { totalPrice } from '../../utils'


function CheckoutSideMenu () {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    shoppingCarts,
    setShoppingCarts,
    order,
    setOrder,
    setCount
  } = useContext(ShoppingContext)

  const handleDelete = (id) => {
    const filteredProducts = shoppingCarts.filter(product => product.id !== id)
    setShoppingCarts(filteredProducts)
  }

  const handleCheckout = () => {
    const date = new Date()

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: shoppingCarts,
      totalProducts: shoppingCarts.length,
      totalPrice: totalPrice(shoppingCarts)
    }
    
    setOrder([...order, orderToAdd])
    setShoppingCarts([])
    setCount(0)
    closeCheckoutSideMenu()
  }
  
  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)] top`}
    >
      <div className='flex justify-between items-center pl-2 pr-6 mt-2'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <span onClick={closeCheckoutSideMenu}>
          <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#09f]' />
        </span>
      </div>

      <div className='py-2 px-2 overflow-y-scroll flex-1'>
        {
          shoppingCarts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>

      <div className='pl-2 pr-6 mb-2'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium'>${totalPrice(shoppingCarts)}</span>
        </p>
        <Link to='/orders/last'>
          <button className='bg-black text-white py-3 w-full rounded-lg' onClick={handleCheckout}>Checkout</button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
