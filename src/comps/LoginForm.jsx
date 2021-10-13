import "../css/LoginForm.css";
import { useState } from "react";
import { useUserContext } from "../context";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/fetchModule";
import { GoogleButton } from "../comps";
function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChage = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    history.replace("/");
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChage}
      />
      <input
        name="password"
        type="password"
        placeholder="비빌번호를 입력하세요"
        onChange={onChage}
      />
      <button onClick={onLogin}>로그인</button>
      <GoogleButton />
    </div>
  );
}

export default LoginForm;
