
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'
import OrdersCard from '../../components/orderscard'

function Orders() {
  const { order } = useContext(ShoppingContext)
  
  return (
    <Layout>
      Orders
      {
        order.map((order, index) => (
          <Link key={index} to={`/orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))
      }
    </Layout>
  )
}

export default Orders
