import { BrowserRouter } from "react-router-dom";

const LoginRoute = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default LoginRoute;
