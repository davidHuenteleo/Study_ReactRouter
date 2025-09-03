import { NavLink } from 'react-router-dom';
import './Menu.css'

const routes = [
  { to: '/', text: 'Home' },
  { to: '/blog', text: 'Blog' },
  { to: '/profile', text: 'Profile' },
];

function Menu() {
  return(
    <nav className="menu">

      <h1 className="menu-title">Menu</h1>

      <ul className='menu-list'>
        {routes.map(route => (
          <li key={route.to} className='menu-item'>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to={route.to}
            >
              {route.text}
            </NavLink>  
          </li>
        ))}
      </ul>
    </nav>  
  );
}

export default Menu;
