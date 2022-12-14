import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Auth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const signin = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };
  return (
    <div>
      <button className="btn" onClick={signin}>
        signin
      </button>
    </div>
  );
};

export default Auth;
