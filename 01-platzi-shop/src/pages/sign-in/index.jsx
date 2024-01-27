import Layout from '../../components/layout'

function SignIn() {
  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-4 w-96'>Welcome</h1>
      <div className='flex flex-col w-96'>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>yoos@correo.com</span>
        </p>
        <p>
          <span>Password: </span>
          <span>*****</span>
        </p>
        <a className='bg-black disabled:bg-black/40 text-center text-white w-full rounded-lg py-1 mt-2 mb-1' href='/'>Log In</a>
        <a className='font-light text-center text-xs underline underline-offset-4' href='/'>Forgot my Password</a>
        <button className='border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-4 py-1'>Sign Up</button>
      </div>
    </Layout>
  )
}

export default SignIn
