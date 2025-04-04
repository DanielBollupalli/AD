import React, { useState } from "react";
import "./App.css";

function Profile({ user, close, updateUser, deleteUser }) {
  const [editingField, setEditingField] = useState(null);
  const [tempUser, setTempUser] = useState({ ...user });
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (typeof updateUser === "function") {
      updateUser({ ...tempUser, profilePicture });
      setEditingField(null);
    } else {
      console.error("updateUser is not a function");
    }
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="modal-overlay">
      <div className="modal advanced-modal">
        <button className="close-button" onClick={close}>×</button>
        <h2>Account Details</h2>

        <div className="profile-info">
          <label>Profile Picture:</label>
          <div className="profile-picture">
            <img src={profilePicture || "default-profile.png"} alt="Profile" className="circle-image" />
            <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
          </div>
        </div>

        {[
          { label: "Name", key: "name", type: "text" },
          { label: "Email", key: "email", type: "email" },
          { label: "Contact", key: "contact", type: "text" },
          { label: "Alternate Mobile", key: "alternateMobile", type: "text" },
          { label: "Date of Birth", key: "dob", type: "date" },
          { label: "Password", key: "password", type: "password" },
        ].map(({ label, key, type }) => (
          <div className="profile-info" key={key}>
            <label>{label}:</label>
            {editingField === key ? (
              <>
                <input type={type} name={key} value={tempUser[key] || ""} onChange={handleFieldChange} />
                <button className="save-button" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <span>{key === "password" ? "••••••••" : tempUser[key] || "Not provided"}</span>
                <button className="edit-button" onClick={() => setEditingField(key)}>Edit</button>
              </>
            )}
          </div>
        ))}

        <div className="profile-actions">
          <button className="back-button" onClick={close}>Go Back</button>
          <button className="delete-button" onClick={deleteUser}>Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
