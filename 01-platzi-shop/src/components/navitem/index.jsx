import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function NavItem ({ children, to, activeStyle }) {
  return (
    <NavLink
      to={to}
      className={ ({ isActive }) => isActive ? activeStyle : undefined }
    >
      {children}
    </NavLink>
  )
}

NavItem.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  activeStyle: PropTypes.string
}

export default NavItem
