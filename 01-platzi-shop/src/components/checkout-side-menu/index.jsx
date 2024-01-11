import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'

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
      
    </aside>
  )
}

export default CheckoutSideMenu
