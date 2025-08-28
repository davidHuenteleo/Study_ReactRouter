import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', text: 'Home' },
  { to: '/blog', text: 'Blog' },
  { to: '/profile', text: 'Profile' },
];

function Menu() {
  return(
    <nav>
      <ul>

        {routes.map(route => (

          <li key={route.to}>
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
