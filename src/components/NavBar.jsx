import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <NavLink  bg="dark" variant="dark">
        <Link to="/">
          <img
                      src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/null/external-home-multimedia-kiranshastry-gradient-kiranshastry.png"
            alt="home"
          />
        </Link>
      </NavLink>
    </>
  )
}

export default NavBar
