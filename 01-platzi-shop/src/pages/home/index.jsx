import { ChevronDoubleUpIcon } from '@heroicons/react/24/solid'

import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/product-detail'
import './styles.css'

import responseItem from '../../mocks/with-results.json'
// import withoutResult from '../../mocks/not-results.json'

// const URL = 'https://api.escuelajs.co/api/v1/products'

function Home() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const data = responseItem
    setItems(data)
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
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
