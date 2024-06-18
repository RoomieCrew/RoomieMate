import React from 'react';
import '../../assets/styles/pages/mypage/UserInfoStyle.css';

const UserInfo = () => {
  return (
    <div className="container">
      <div className="input-group">
        <table className="input-table">
          <tr className="input-row">
            <td className="input-label">*이름</td>
            <td className="input-value">홍길동</td>
          </tr>
          <tr className="input-row">
            <td className="input-label">*아이디(ID)</td>
            <td className="input-value">example01</td>
          </tr>
          <tr className="input-row">
            <td className="input-label">휴대폰</td>
            <td>
              <input type="text" className="input-field" />
            </td>
          </tr>
          <tr className="input-row">
            <td className="input-label">이메일</td>
            <td>
              <input type="text" className="input-field" />
            </td>
          </tr>
          <tr className="input-row">
            <td className="input-label">주소</td>
            <td className="input-value">example01</td>
          </tr>
        </table>
      </div>
      <button className="confirm-button">수정하기</button>
    </div>
  );
};

export default UserInfo;
