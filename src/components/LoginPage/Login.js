import React, {useContext} from "react";
import loginBG from "../../images/loginBg.png";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";

// Initialize Firebase
import firebaseConfig from "./firebase.config.js";
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const navigate = useNavigate();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res);
        const { displayName, email } = res.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch((err) => {
        var errorCode = err.code;
        var errMessage = err.message;
        console.log(errorCode, errMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(idToken => {
        console.log(idToken);
        sessionStorage.setItem("token", idToken);
        navigate(from);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
            <p className="text-danger">Forgotten password?</p>
          </div>
          <div className="from-group mt-2">
            <button
              className="btn text-white btn-brand"
              onClick={handleGoogleSignIn}
            >
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
