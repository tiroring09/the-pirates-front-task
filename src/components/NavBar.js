const NavBar = () => {
  return (
  <>
    <div className="d-flex justify-content-between" style={st.top}>
      <span style={st.logo}>더파이러츠 프론트</span>
      <div>
        <span style={st.login}>로그인/회원가입</span>
      </div>
    </div>

    <ul id="navbar" className="list-group list-group-horizontal w100 justify-content-between">
      <li className="flex-fill" style={st.menu}>홈</li>
      <li className="flex-fill" style={st.menu}>시장</li>
      <li className="flex-fill" style={st.menu}>쇼핑</li>
      <li className="flex-fill" style={st.menu}>콘텐츠</li>
      <li className="flex-fill" style={st.menu}>시세</li>
      <li className="flex-fill" style={st.menu}>도매</li>
      <li className="flex-fill" style={st.menu}>후기</li>
      <li className="flex-fill" style={st.menu}>문의</li>
    </ul>
  </>
  );
}

const st = {
  top: {
    padding: '0.5em',
  },
  logo: {
    marginLeft: '0.5em',
  },
  login: {
    color: 'gray',
    fontSize: '0.8em',
  },
  menu: {
    border: '1px solid #f1f1f1',
  },
}


export default NavBar;