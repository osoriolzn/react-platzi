import PropTypes from 'prop-types'
import { CalendarDaysIcon, CurrencyDollarIcon, ShoppingCartIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

function OrdersCard ({ date, totalPrice, totalProducts }) {
  let renderQuantityProducts = <span className='flex'>
    <ShoppingCartIcon className='h-6 w-6 text-[#09f]' />
    {totalProducts} Producto
  </span>

  if (totalProducts > 1) {
    renderQuantityProducts = <span className='flex'>
      <ShoppingCartIcon className='h-6 w-6 text-[#09f]' />
      {totalProducts} Productos
    </span>
  }

  return (
    <div className='flex justify-between items-center border border-black m-1 w-96 rounded-lg'>
      <p className='flex justify-between items-center gap-2 p-2 w-full'>
        <span className='flex'>
          <CalendarDaysIcon className='h-6 w-6 text-[#09f]' />
          {date}
        </span>
       {renderQuantityProducts}
        <span className='flex'>
          <CurrencyDollarIcon className='h-6 w-6 text-[#09f]' />
          {totalPrice}
        </span>
      </p>
      <ChevronRightIcon className='h-6 w-6' />
    </div>
  )
}

OrdersCard.propTypes = {
  date: PropTypes.string,
  totalPrice: PropTypes.number,
  totalProducts: PropTypes.number
}

export default OrdersCard
