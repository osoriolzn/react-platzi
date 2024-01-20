import { ChevronLeftIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'
import OrderCard from '../../components/ordercard'

function Order() {
  const { order } = useContext(ShoppingContext)
  const params = useParams()

  const indexOrderPath = Number(params.id)
  
  return (
    <Layout>
        <div className='flex items-center justify-center relative w-80 mb-2'>
          <Link to={'/orders'} className='absolute left-0'>
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
          </Link>
        <p>Order</p>
      </div>

      <div className='flex flex-col w-80'>
        {
          !isNaN(indexOrderPath) && order?.[indexOrderPath].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        }
        {
          isNaN(indexOrderPath) && order?.slice(-1)[0].products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default Order
