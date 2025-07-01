import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import axios from "axios";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to log out.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        axios
          .post(
            "https://knowvia-server.vercel.app/jwt",
            {
              email: currentUser?.email,
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            toast.success(res.data.message || "JWT Created Successfully!");
          });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    signIn,
    resetPassword,
    loading,
    user,
    updateUser,
    signInWithGoogle,
    logOut,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
