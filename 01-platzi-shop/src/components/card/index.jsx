import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ShoppingContext } from '../../context'

function Card ({ data }) {
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    openCheckoutSideMenu,
    setProductToShow,
    shoppingCarts,
    setShoppingCarts
  } = useContext(ShoppingContext)
    
  const headleClickShowProduct = () => {
    openProductDetail()
    setProductToShow({data})
  }
  
  const headleClickAddToCart = (event) => {
    event.stopPropagation()
    setCount(count + 1)
    setShoppingCarts([...shoppingCarts, data])
    openCheckoutSideMenu()
    closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = shoppingCarts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center text-white bg-green-400 w-6 h-6 rounded-full m-2 p-1'
        >
          <CheckIcon />
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => headleClickAddToCart(event)}
        >
          <PlusIcon />
        </button>
      )
    }
  }

  return (
    <div
      onClick={headleClickShowProduct}
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.images[0]}
          alt={data.description}
        />
        {renderIcon(data.id)}
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object
}

export default Card
