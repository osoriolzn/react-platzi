import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import OrderCard from '../../components/ordercard'


function CheckoutSideMenu () {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, shoppingCarts } = useContext(ShoppingContext)
  
  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)] top`}
    >
      <div className='flex justify-between items-center px-2'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <span onClick={closeCheckoutSideMenu}>
          <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#09f]' />
        </span>
      </div>

      <div className='py-2 px-2 overflow-y-scroll'>
        {
          shoppingCarts.map(product => (
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
