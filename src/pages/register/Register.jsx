import { useContext, useState } from "react";
import lottieRegister from "../../assets/lotties/register.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router";
import SocialLogIn from "../Shared/SocialLogin";
import { motion as Motion } from "framer-motion";
import { AuthContext } from "../../context/authContext/AuthContext";
import { updateProfile } from "firebase/auth";
import { FaRegLightbulb } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import useImageUploader from "../../hooks/useImageUploader";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { uploadImage, uploading, uploadedUrl: profilePic, setUploadedUrl } = useImageUploader();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

    if (name.length < 6) {
      return Swal.fire({ icon: "warning", title: "Invalid Name", text: "Name should be at least 6 characters long!" });
    }
    if (!profilePic) {
      return toast.error("Please upload your profile picture before submitting.");
    }
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "warning",
        title: "Weak Password",
        html: `Password must contain:<br>• At least <b>1 uppercase</b><br>• At least <b>1 lowercase</b><br>• At least <b>1 special character</b><br>• At least <b>6 characters</b>`
      });
    }
    if (password !== confirmPassword) {
      return Swal.fire({ icon: "warning", title: "Password Mismatch", text: "Passwords do not match!" });
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        return updateProfile(user, { displayName: name, photoURL: profilePic }).then(() => {
          form.reset();
          setUploadedUrl("");
          Swal.fire({ icon: "success", title: "Registration Successful", text: `Welcome, ${name}!` });
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({ icon: "error", title: "Registration Failed", text: error.message });
      });
  };

  return (
    <>
      <Helmet><title>Knowvia | Register</title></Helmet>

      <div className="min-h-screen py-12 bg-base-200 flex items-center justify-center px-4">
        <div className="max-w-7xl w-full grid lg:grid-cols-3 items-center gap-8">
          
          {/* Left Lottie */}
          <div className="hidden lg:flex justify-center">
            <Lottie animationData={lottieRegister} className="w-full max-w-md" />
          </div>

          {/* Form */}
          <Motion.div
            className="col-span-1 bg-base-100 shadow-xl rounded-xl p-6 md:p-10 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Link
              to="/"
              className="text-2xl flex items-center justify-center font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-violet-400 bg-clip-text text-transparent"
            >
              <FaRegLightbulb className="text-secondary mr-2" />
              Knowvia
            </Link>
            <h1 className="text-xl font-bold mb-3 text-center">Create an Account</h1>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="label font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="label font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="input input-bordered w-full"
                />
              </div>

              {/* Profile Picture */}
              <div>
                <label className="label font-medium">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const url = await uploadImage(e.target.files[0]);
                    if (url) setUploadedUrl(url);
                  }}
                  className="file-input file-input-bordered w-full"
                />
                {uploading && <p className="text-sm text-orange-500 mt-1">Uploading...</p>}
                {profilePic && (
                  <div className="mt-2 flex justify-center">
                    <img
                      src={profilePic}
                      alt="Uploaded Profile"
                      className="w-20 h-20 rounded-full border object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="label font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    required
                    className="input input-bordered w-full pr-10"
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label font-medium">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                    className="input input-bordered w-full pr-10"
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 cursor-pointer text-xl text-gray-500"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={uploading}
                  className="w-full text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 px-4 py-2 rounded text-sm"
                >
                  {uploading ? "Uploading..." : "Register"}
                </button>
              </div>
            </form>

            <SocialLogIn mode="signup" />

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/signIn" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </Motion.div>

          {/* Right Lottie */}
          <div className="hidden lg:flex justify-center">
            <Lottie animationData={lottieRegister} className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
