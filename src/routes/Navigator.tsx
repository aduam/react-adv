import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from 'react-router-dom';

import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigator = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={ logo } alt='react logo' />
          <ul>
            <li><NavLink to='/home' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink></li>
            <li><NavLink to='/about' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink></li>
            <li><NavLink to='/users' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink></li>
            <li><NavLink to='/' className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Sopping</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About page</h1>} />
          <Route path='users' element={<h1>Users page</h1>} />
          <Route path='home' element={<h1>Home page</h1>} />
          <Route path='/' element={ <ShoppingPage /> } />
          <Route  path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};