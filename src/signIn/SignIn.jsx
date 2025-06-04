import { useContext, useState } from "react";
import { motion as Motion } from "framer-motion";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import lottilogIn from "../assets/lotties/login.json";
import SocialLogIn from "../pages/Shared/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../context/authContext/AuthContext";
import { FaRegLightbulb } from "react-icons/fa";

const SignIn = () => {
  const { signIn, resetPassword } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Sign In user:", user);
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Sign In Successful",
          text: `Welcome back, ${name || "User"}!`,
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Sign In Failed",
          text: error.message,
        });
      });
  };

  const handleForgetPassword = async () => {
    const { value: email } = await Swal.fire({
      title: "Reset Password",
      input: "email",
      inputLabel: "Enter your email address",
      inputPlaceholder: "Email address",
      showCancelButton: true,
      confirmButtonText: "Send Reset Link",
    });

    if (email) {
      resetPassword(email)
        .then(() => {
          Swal.fire(
            "Sent!",
            "Password reset link has been sent to your email.",
            "success"
          );
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-4 md:px-8">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">
     
        <Motion.div
          className="hidden lg:block w-1/4"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie animationData={lottilogIn} loop={true} />
        </Motion.div>

    
        <Motion.div
          className="card w-full md:w-8/12 lg:w-4/12 mx-auto bg-base-100 max-w-md lg:max-w-lg shrink-0 shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="card-body">
            <Link
          to={"/"}
          className="text-2xl flex items-center justify-center font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-violet-400 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-violet-500"
        >
          <FaRegLightbulb className="text-secondary hidden md:block" />
          Knowvia
        </Link>
            <h1 className="text-xl mt-0 font-bold text-center">
              Access Your Account
            </h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  required
                />

                <label className="label mt-2">Password</label>
                <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>

                <div className="flex justify-between items-center mt-0.5">
                  <button
                    type="button"
                    className="link link-hover text-sm text-blue-500"
                    onClick={handleForgetPassword}
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full cursor-pointer text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 px-4 py-2 rounded transition"
                >
                  Sign In
                </button>
              </fieldset>
            </form>

            <SocialLogIn form={from} />

            <p className="text-center mt-4 text-sm">
              Don't have an account? Please{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </Motion.div>

      
        <Motion.div
          className="hidden lg:block w-1/4"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Lottie animationData={lottilogIn} />
        </Motion.div>
      </div>
    </div>
  );
};

export default SignIn;