import { useContext, useRef, useState } from 'react'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'

function Account() {
  const { setAccount } = useContext(ShoppingContext)
  const [view, setView] = useState('user-info')

  const accountLS = localStorage.getItem('account')
  const parsedAccount = JSON.parse(accountLS)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
  }

  const renderUserInfo = () => {
    return (
      <div className='flex flex-col w-96'>
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>

        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>

        <button
          className='border border-black rounded-lg mt-6 py-3'
          onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-96'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your name:</label>
          <input
            type='text'
            id='name'
            name='name'
            autoComplete='on'
            defaultValue={parsedAccount.name}
            placeholder='Luisa'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-light text-sm'>Your email:</label>
          <input
            type='text'
            id='email'
            name='email'
            autoComplete='on'
            defaultValue={parsedAccount.email}
            placeholder='youemail@shoping.com'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-light text-sm'>Your password:</label>
          <input
            type='text'
            id='password'
            name='password'
            autoComplete='on'
            defaultValue={parsedAccount.password}
            placeholder='********'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <button
          className='bg-black text-white w-full rounded-lg py-3'
          onClick={() => {setView('user-info'), editAccount()}}>
          Edit
        </button>
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserInfo()

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-96">Account</h1>
      {renderView()}
    </Layout>
  )
}

export default Account
