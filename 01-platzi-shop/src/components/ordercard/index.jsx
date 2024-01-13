import PropTypes from 'prop-types'
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard ({ title, imageUrl, price }) {
//   const { id, title, imageUrl, price } = props
  return (
    <div className='flex justify-between items-center pb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#09f]' />
      </div>
    </div>
  )
}

export default OrderCard

OrderCard.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number
}
