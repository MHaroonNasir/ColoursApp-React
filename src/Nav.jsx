import {Link, NavLink, Outlet} from "react-router-dom"

function Nav() {
    let activeStyle = {
      textDecoration: "underline"
    }
    return (
      <>
        <nav>
          <ul className="nav-links">
            <NavLink
              to="/colours"
              id="home-link"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
            >
              Home 
            </NavLink>
            <NavLink
              to="/colours/new"
              id="new-colour-link"
              style={({isActive}) => (isActive ? activeStyle : undefined)}
            >
              New Colour
            </NavLink>
          </ul>
        </nav>
        <Outlet />
      </>
    )
  }
  
  export default Nav