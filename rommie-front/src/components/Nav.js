import React from 'react';
import '../assets/styles/components/Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-item-home">홈</div>
      <div className="nav-separator1">|</div>
      <div className="nav-item-mypage">마이페이지</div>
      <div className="nav-separator2">|</div>
      <div className="nav-item-myinfo">회원정보변경</div>
    </nav>
  );
};

export default Nav;