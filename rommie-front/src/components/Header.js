import React from 'react';
import '../assets/styles/components/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">공간예약서비스</div>
      <div className="header-center">ROOMieMATE</div>
      <div className="header-right">로그인하기</div>
    </header>
  );
};

export default Header;