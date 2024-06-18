import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import UserInfoCheckPw from './pages/mypage/UserInfoCheckPw';
import UserInfo from './pages/mypage/UserInfo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/mypage/UserInfoCheckPw" element={<UserInfoCheckPw />} />
        <Route path="/mypage/UserInfo" element={<UserInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
