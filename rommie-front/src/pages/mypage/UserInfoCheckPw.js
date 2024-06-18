import React from 'react';
import '../../assets/styles/pages/mypage/UserInfoCheckPwStyle.css';

const UserInfoCheckPw = () => {
  return (
    <div className="container">
      <div className="password-check-box">
        <h2 className="title">비밀번호 확인</h2>
        <p className="subtitle">
          개인정보를 보호하기 위해 비밀번호를 다시 한 번 입력해주세요.
        </p>
        <div className="input-group">
          <table className="input-table">
            <tr className="input-row">
              <td className="input-label">아이디</td>
              <td className="input-value">example01</td>
            </tr>
            <tr className="input-row">
              <td className="input-label">비밀번호</td>
              <td>
                <input type="password" className="input-field" />
              </td>
            </tr>
          </table>
        </div>
        <div className="button-group">
          <button className="cancel-button">입력 취소</button>
          <button className="confirm-button">확인</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCheckPw;
