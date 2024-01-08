import PropTypes from 'prop-types'
import { useContext } from 'react'
import { ShoppingContext } from '../../context'

function Card ({ data }) {
  const { count, setCount } = useContext(ShoppingContext)

  const headleClick = () => {
    setCount(count + 1)
  }
  
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.images[0]}
          alt={data.description}
        />
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={headleClick}
        >
          +
        </button>
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
