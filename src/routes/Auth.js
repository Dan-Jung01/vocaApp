import React from "react";
import { authService, firebaseInstance } from "fbase";
import AuthForm from "components/AuthForm";
import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };

  return (
    <div className='authContainer'>
      <div className='authTitle'>나만의 단어장</div>
      <AuthForm />
      <div className='authBtns'>
        <button onClick={onSocialClick} name='google' className='authBtn'>
          Continue with Google <FaGoogle className='icon' />
        </button>
      </div>
    </div>
  );
};
export default Auth;
