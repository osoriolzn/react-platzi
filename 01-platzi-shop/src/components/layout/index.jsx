import PropTypes from 'prop-types'
import './layout.css'

function Layout ({ children }) {
  return (
    <>
      <div className='flex flex-col items-center mt-20'>
        {children}
      </div>
      <a id='back-top' href='#top'>Ir al inicio</a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
