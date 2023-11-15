import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate('/ad');

  const from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const result = await signIn(email, password);
      console.log(result.user);
      
      navigate(from, { replace: true });
    } catch (error) {
      console.error("login error:", error);
      setError("Invalid Password & Email");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#36d399]">
      <div className="rounded-lg bg-white p-5 md:w-3/4 lg:w-1/2">
        <h1 className="text-center text-3xl font-bold mb-4">
          Please Login Now !!
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email Address"
              className="w-full p-2 rounded border"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="w-full p-2 rounded border"
            />
            <span
              className="absolute top-8 right-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <label className="text-xs mt-2">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </label>
          </div>
          <h1 className="text-xl font-bold mb-4">Login With</h1>
          <div className="">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline rounded-b mt-4 w-40 lowercase"
            >
              <FaGoogle className="inline-block mb-1 mr-2" />
              Google
            </button>
            <button className="btn btn-outline rounded-t w-40 lowercase ml-3">
              <FaGithub className="inline-block mb-1 mr-2" />
              GitHub
            </button>
          </div>
          <div className="mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <p className="text-center mt-4">
          Do Not Have an Account?{" "}
          <Link className="text-blue-700 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    
    </div>
  );
};

export default Login;
