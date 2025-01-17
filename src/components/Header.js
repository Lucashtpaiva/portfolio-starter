import React from 'react';
import Logo from '../assets/logo-lucas.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img src={Logo} alt='Logo' />
        </a>
        <button className='btn btn-sm'>Entrar em contato</button>
      </div>
    </div>
  </header>;
};

export default Header;
