import { XMarkIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'

function ProductDetail () {
  const { isProductDetailOpen, closeProductDetail, productToShow } = useContext(ShoppingContext)
  
  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)] top`}
    >
      <div className='flex justify-between items-center px-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <span onClick={closeProductDetail}>
          <XMarkIcon className='h-6 w-6 rounded-full cursor-pointer text-white bg-[#09f]' />
        </span>
      </div>
      <figure className='px-6 mt-4'>
        {productToShow.data &&
          <img
            className='w-full h-full rounded-lg'
            src={productToShow.data.images[0]}
            alt={productToShow.data.title}
          />
        }
      </figure>
      <p className='flex flex-col p-6'>
        {productToShow.data &&
          <>
            <span className='font-medium text-2xl mb-2'>${productToShow.data.price}</span>
            <span className='font-medium text-mg mb-1'>{productToShow.data.title}</span>
            <span className='font-light text-sm'>{productToShow.data.description}</span>
          </>
        }
      </p>
    </aside>
  )
}

export default ProductDetail
