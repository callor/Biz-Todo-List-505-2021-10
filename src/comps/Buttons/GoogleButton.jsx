import "../../css/GoogleButton.css";
import { useEffect, useRef } from "react";
import { useUserContext } from "../../context";
import { useHistory } from "react-router-dom";

function GoogleButton() {
  const buttonRef = useRef();
  const { setUser } = useUserContext();
  const history = useHistory();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const name = profile.getName();
    const image = profile.getImageUrl();
    const Token = result.getAuthResponse().id_token;

    setUser({
      userid: email,
      login_source: "GOOGLE",
    });
    alert(email + " 님 반갑습니다");
    history.replace("/");
  };

  /**
   * public/index.html 파일에 script를 import 한다
   * src="https://apis.google.com/js/api:client.js"
   */
  const googleSDK_init = () => {
    if (!window.gapi) {
      alert("Google API NOT Found");
      return;
    }

    // google API 가 활성화되고
    // 활성화된 API중에서 auth2가 loading(사용할 준비가 되면)
    // gapi : google cloud service를 JS에서 사용하기 위한 객체 도구
    // gapi의 load() 함수를 사용하여 auth2 객체를 초기화하기
    // 이때 google로 부터 부여받은 client_id를 입력한다.

    window.gapi.load("auth2", async () => {
      // load() 함수에 의해서 auth2객체가 초기화 된다
      // auth2 객체 : google cloud service를 사용한 oAuth2 인증 시스템에
      // 접근 할수 있는 객체
      // google로 로그인을 구현하기 위한 초기화 절차
      const auth2 = await window.gapi.auth2.init({
        client_id:
          "71709386283-j70dgf0es5rsao99d5ouhk03jot8fihg.apps.googleusercontent.com",
        scope: "profile email",
      });

      if (auth2?.isSignedIn.get()) {
        console.log("로그인이 이미 된상태");
        // 원하는 곳으로 redirect
      }

      // 버튼을 클릭했을때
      // google 로그인 창이 뜨도록 하는 click event 핸들러 설정
      // buttonRef 가 ref로 설정된 컴포넌트(button 등)에
      // 클릭 이벤트를 설정하고
      // 해당하는 컴포넌트를 클릭하면 google 로그인 창이 뜨도록 설정하기
      // google login 창이 popup 되고, id를 선택하여,
      // 정상적으로 로그인이 수행되면
      // 로그인 이후 작동되는 callback 함수를 3번째 매개변수로
      // 설정한다
      // google login 창이 popup 된후 그냥 창을 닫거나
      // 또는 정상적으로 로그인이 수행되지 않았을때 실행되는 함수를
      // 4번째 매개변수로 설정한다
      // 1번째 매개밴수 : 누구를 클릭했을때
      // 2번째 매개변수 : 옵션
      // 3번째 매개변수 : 로그인이 성공했을때 실행할 함수
      // 4번째 매개변수 : 로그인이 실패했을때 실행할 함수
      await auth2.attachClickHandler(
        buttonRef.current,
        {},
        googleResponse,
        (err) => alert(JSON.stringify(err))
      );
    });
  };
  useEffect(googleSDK_init, [googleSDK_init]);

  const logout = (e) => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("LogOut OK!!!");
  };

  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        <span className="icon"></span>
        <span className="buttonText">Google 로그인</span>
      </div>
      <span className="buttonText" onClick={logout}>
        Google 로그아웃
      </span>
    </div>
  );
}

export default GoogleButton;
