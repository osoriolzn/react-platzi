import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'

function ShoppingCart () {
  const {shoppingCarts, openCheckoutSideMenu, closeProductDetail} = useContext(ShoppingContext)

  const openCheckout = () => {
    openCheckoutSideMenu()
    closeProductDetail()
  }

  return (
    <div className='relative flex gap-0.5 items-center' onClick={openCheckout}>
      <ShoppingCartIcon className='h-6 w-6 text-[#09f] cursor-pointer' />
      <span className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white'>
        {shoppingCarts.length}
      </span>
    </div>
  )
}

export default ShoppingCart
