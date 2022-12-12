import React from "react";
import loginBG from "../../images/loginBg.png";

const Login = () => {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <h3 className="text-center">Login</h3>
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="from-group mt-2">
            <button className="btn text-white btn-brand">
              Sign in with Google
            </button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img style={{ width: "100%" }} src={loginBG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;