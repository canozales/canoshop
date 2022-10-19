import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const dataNavigasi = [
  {
    nama: 'Beranda',
    path: '/',
  },
  {
    nama: 'Kategori',
    path: '/kategori',
  },
  {
    nama: 'Keranjang',
    path: '/keranjang',
  },
  {
    nama: 'Membership',
    path: '/membership',
  },
];

const Navbar = () => {
  const currentPath = useLocation().pathname;
  const currentNav = dataNavigasi.findIndex((x) => x.path === currentPath);

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className='navbar'>
      <Link className='kiri' to={'/'}>
        <span>Canoshop</span>
      </Link>

      <ul className='tengah'>
        {dataNavigasi.map((item, index) => (
          <li key={index} className={`${index === currentNav ? 'active' : ''}`}>
            <Link className='Link' to={item.path}>
              <span>{item.nama}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='kanan'>
        <span>Sign up | Login</span>
      </div>

      <div className='navbar_small'>
        <AiOutlineMenu
          className='buka'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='smallscreen_overlay slide-bottom'>
            <AiOutlineClose
              className='tutup'
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul>
              {dataNavigasi.map((item, index) => (
                <li
                  key={index}
                  className={`${index === currentNav ? 'active' : ''}`}
                >
                  <Link
                    className='Link'
                    to={item.path}
                    onClick={() => setToggleMenu(false)}
                  >
                    <span>{item.nama}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
