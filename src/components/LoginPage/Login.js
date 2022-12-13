import React from "react";
import loginBG from "../../images/loginBg.png";
import firebase from "firebase/app";
import "firebase/auth";

// Initialize Firebase
import firebaseConfig from './firebase.config.js';
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


const Login = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
    console.log(res);
    storeAuthToken();
    })
    .catch(err => {
    console.log(err.message);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
           console.log(idToken);
           sessionStorage.setItem('token', idToken);
        }).catch(function (error) {
            console.log(error)
        });
}

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
