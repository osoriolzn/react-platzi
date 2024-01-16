import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'
import OrderCard from '../../components/ordercard'

function Order() {
  const { order } = useContext(ShoppingContext)

  return (
    <Layout>
      Order
      <div className='flex flex-col w-80'>
        {
          order?.slice(-1)[0].products.map(product => (
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
