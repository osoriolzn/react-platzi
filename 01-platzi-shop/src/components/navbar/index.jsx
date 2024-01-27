import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { useContext } from 'react'
import { ShoppingContext } from '../../context'
import NavItem from '../navitem'

function NavBar () {
  const {
    shoppingCarts,
    signOut,
    setFilteredItems,
    setSearch,
    setSearchCategory,
    setSignOut
  } = useContext(ShoppingContext)

  const activeStyle = 'underline underline-offset-4'

  const signOutLS = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOutLS)
  const isUserSigOut = signOut || parsedSignOut

  const handleResetFiltered = () => {
    setFilteredItems([])
    setSearch('')
    setSearchCategory('')
  }

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    setSignOut(true)
  }

  const renderView = () => {
    if (isUserSigOut) {
      return (
        <li onClick={handleSignOut}>
          <NavItem to='/sign-in' activeStyle={activeStyle}>
            Sign In
          </NavItem>
        </li>
      )
    } else {
      return (
        <>
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
          <li onClick={handleSignOut}>
            <NavItem to='/sign-in' activeStyle={activeStyle}>
              Sign Out
            </NavItem>
          </li>
        </>
      )
    }
  }

  return (
    <nav className='flex justify-between items-center bg-white fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li onClick={handleResetFiltered} className='font-semibold text-lg'>
          <NavItem to='/' activeStyle=''>
            Shopi
          </NavItem>
        </li>
        <li onClick={handleResetFiltered}>
          <NavItem to='/' activeStyle={activeStyle}>
            All
          </NavItem>
        </li>
        <li onClick={() => setSearchCategory('clothes')}>
          <NavItem to='/clothes' activeStyle={activeStyle}>
            Clothes
          </NavItem>
        </li>
        <li onClick={() => setSearchCategory('electronics')}>
          <NavItem to='/electronics' activeStyle={activeStyle}>
            Electronics
          </NavItem>
        </li>
        <li onClick={() => setSearchCategory('furnitures')}>
          <NavItem to='/furnitures' activeStyle={activeStyle}>
            Furnitures
          </NavItem>
        </li>
        <li onClick={() => setSearchCategory('toys')}>
          <NavItem to='/toys' activeStyle={activeStyle}>
            Toys
          </NavItem>
        </li>
        <li onClick={() => setSearchCategory('others')}>
          <NavItem to='/others' activeStyle={activeStyle}>
            Others
          </NavItem>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        {renderView()}
        <li className='flex items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-[#09f]' />
          <div>
            {shoppingCarts.length}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
