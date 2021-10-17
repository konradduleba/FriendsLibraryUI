import Button from "Components/Button";
import EButtonTypeList from "Components/Button/Types/EButtonTypeList";
import FormInput from "Components/Form/Input";
import EInputTypes from "Components/Form/Input/Types/EInputTypes";
import React, { useContext, useState } from "react";
import ILoginCredentials from "./Types/ILoginCredentials";
import "./Styles/Login.scss";
import { Link } from "react-router-dom";
import useWindowSize from "Utils/Functions/useWindowSize";
import checkIsMobileView from "Utils/Functions/checkIsMobileView";
import sendRequest from "Authentication/sendRequest";
import EApiMethods from "Utils/Types/EApiMethods";
import { TokenContext } from "Context/Token";

const Login = (): JSX.Element => {
  const { loginUser } = useContext(TokenContext);
  const { width } = useWindowSize();
  const isMobileView = checkIsMobileView(width);

  const [loginCredentials, setUpLoginCredentials] = useState<ILoginCredentials>(
    {
      email: "",
      password: "",
    }
  );

  const handleLogIn = async () => {
    const data = { ...loginCredentials };
    const result = loginUser && (await loginUser(data));
    console.log(result);
  };

  const updateLoginCredentials = (key: string, value: string) => {
    setUpLoginCredentials((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const forgotPasswordHeader = (
    <Link className="forgot-password-link" to="/forgot-password">
      Forgot your password?
    </Link>
  );

  return (
    <div className="login-page-wrapper">
      <div className="login-box">
        <div className="content">
          <h1 className="title">Log in</h1>
          <div className="form">
            <FormInput
              header="Email"
              type={EInputTypes.TEXT}
              isRequired={true}
              onChange={(value) => updateLoginCredentials("email", value)}
              value={loginCredentials.email}
            />
            <FormInput
              headerChildren={isMobileView ? undefined : forgotPasswordHeader}
              header="Password"
              type={EInputTypes.PASSWORD}
              isRequired={true}
              onChange={(value) => updateLoginCredentials("password", value)}
              value={loginCredentials.password}
            />
            {isMobileView && forgotPasswordHeader}
            <Button
              onClick={() => handleLogIn()}
              type={EButtonTypeList.PRIMARY}
              value="Log in"
              disabled={
                loginCredentials.email !== "" &&
                loginCredentials.password !== ""
                  ? false
                  : true
              }
            />
          </div>
        </div>
        <div className="footer">
          <span>Don't have an account yet?</span>
          <Link to="#">Create an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
