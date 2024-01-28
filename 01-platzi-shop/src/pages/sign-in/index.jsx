import { useContext, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppingContext } from '../../context'
import Layout from '../../components/layout'

function SignIn() {
  const { account, setAccount, setSignOut } = useContext(ShoppingContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  const accountLS = localStorage.getItem('account')
  const parsedAccount = JSON.parse(accountLS)
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalStage = account ? Object.keys(account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalStage

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(false)

    return <Navigate replace to={'/'} />
  }

  const createAnAccount = () => {
    const formDate = new FormData(form.current)
    const data = {
      name: formDate.get('name'),
      email: formDate.get('email'),
      password: formDate.get('password')
    }
    
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    setAccount(data)
  }

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-96'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span>Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to={'/'}>
          <button
            className='bg-black disabled:bg-black/40 text-center text-white w-full rounded-lg py-1 mt-2 mb-1'
            onClick={handleSignIn}
            disabled={!hasUserAnAccount}
          >
            Log In
          </button>
        </Link>
        <a className='font-light text-center text-xs underline underline-offset-4' href='/'>Forgot my Password</a>
        <button
          className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-4 py-1'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAnAccount}
        >
          Sign Up
        </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-96'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your Name</label>
          <input
            type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Luisa'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-light text-sm'>Your Email</label>
          <input
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='youemail@shoping.com'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-light text-sm'>Your Password</label>
          <input
            type='text'
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='********'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>

        <Link to='/'>
          <button
            className='bg-black text-white w-full rounded-lg py-3'
            onClick={createAnAccount}
          >
            Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()
  
  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-4 w-96'>Welcome</h1>
      {renderView()}
    </Layout>
  )
}

export default SignIn
