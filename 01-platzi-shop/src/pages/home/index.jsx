import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/product-detail'
import './styles.css'

function Home() {
  const { items, setSearch } = useContext(ShoppingContext)

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-2'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>

      <input
        onChange={(event) => setSearch(event.target.value)}
        className='rounded-lg border border-black w-80 p-2 mb-4'
        type='text'
        placeholder='Mouse, Laptop...'
      />
      
      <div className='grid grid-cols-4 gap-3 w-full max-w-screen-lg'>
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
      <ProductDetail />
      <a id='back-top' href='#top'>
        <ChevronDoubleUpIcon className='h-6 w-6' />
      </a>
    </Layout>
  )
}

export default Home
