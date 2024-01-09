import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail () {
  return (
    <aside className='flex flex-col fixed right-0 border border-black rounded-lg bg-white top-[68px] w-[360px] h-[calc(100vh-68px)] top'>
      <div className='flex justify-between items-center px-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon className='h-6 w-6 rounded-full text-white bg-[#09f]' />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
