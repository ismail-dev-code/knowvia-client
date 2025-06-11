import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import Swal from "sweetalert2";
import "./MyProfile.css";

const MyProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ displayName, photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your profile has been updated successfully!",
        confirmButtonColor: "#2563eb",
      });
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong while updating your profile.",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  return (
    <section className="profile-container shadow-none md:shadow-2xl ">
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-content">
        <form onSubmit={handleUpdate} className="profile-form">
          <div className="form-group">
            <label>Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Photo URL</label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="update-btn bg-secondary text-white">
            Update Profile
          </button>
        </form>

        <div className="profile-info">
          <h4>Current Info</h4>
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
          <p>
            <strong>Name:</strong> {user?.displayName}
          </p>
          {user?.photoURL && (
            <img src={user.photoURL} alt="Profile" className="profile-img" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
