import { useContext } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/authContext/AuthContext";

const SocialLogIn = ({ form }) => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("Google signed in user:", result.user);
        navigate(form || "/");
        Swal.fire({
          icon: "success",
          title: "Signed in with Google",
        });
      })

      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      {/* Google Sign In */}
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded transition cursor-pointer text-sm"
        >
          <FcGoogle size={20} /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
