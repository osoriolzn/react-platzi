import NavItem from '../navitem'

function NavBar () {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavItem to='/'>
            Shopi
          </NavItem>
        </li>
        <li>
          <NavItem to='/' activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li>
          <NavItem to='/clothes' activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li>
          <NavItem to='/electronics' activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li>
          <NavItem to='/furnitures' activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li>
          <NavItem to='/toys' activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li>
          <NavItem to='/others' activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          yoos@correo.com
        </li>
        <li>
          <NavItem to='/orders' activeStyle={activeStyle}>
            Orders
          </NavItem>
        </li>
        <li>
          <NavItem to='/account' activeStyle={activeStyle}>
            Account
          </NavItem>
        </li>
        <li>
          <NavItem to='/signin' activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
