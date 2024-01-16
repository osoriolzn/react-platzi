import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard ({ id, title, imageUrl, price, handleDelete }) {
  let renderXMarkIcon

  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#09f]' />
  }

  return (
    <div className='flex justify-between items-center pb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  )
}

OrderCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  handleDelete: PropTypes.func
}

export default OrderCard
