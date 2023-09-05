// Profile.jsx
import moment from "moment";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [editForm, setEditForm] = useState(false);
  const [editEmail, setEditEmail] = useState(user?.email);
  const [editName, setEditName] = useState(user?.name);
  return (
    <div className="profile-container">
      <div className="user-info">
        <button className="profile-image-button">
          <img
            src="https://i.imgur.com/wvxPV9S.png"
            height="100"
            width="100"
            alt="Profile Image"
          />
        </button>
        <p className="name">{user?.name}</p>
        <p className="idd">{user?.email}</p>
        <div className="idd1-container">
          <span className="copy-icon">
            <i className="fa fa-copy"></i>
          </span>
        </div>
        <div className="follower-container">
          <p className="number">Pulish Subscriber</p>
          <p className="follow">{user?.subscribed ? "Yes" : "No"}</p>
        </div>
        {!editForm && (
          <div className="edit-profile-button-container">
            <button
              className="edit-profile-button"
              onClick={() => setEditForm(true)}
            >
              Edit Profile
            </button>
          </div>
        )}

        {editForm && (
          <div className="profile-form-container">
            <form
              className="profile-form"
              onSubmit={() => {
                setEditForm(false);
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="profile-form-input"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="profile-form-input"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <button type="submit" className="profile-form-button">
                Save
              </button>
            </form>
          </div>
        )}

        {
          <div className="edit-profile-button-container">
            <button className="edit-profile-button" onClick={() => {}}>
              Change Password
            </button>
          </div>
        }

        <div className="join-date">
          <p className="join">
            Joined on {moment(new Date(user?.createdAt)).format("MMMM,yy")}
          </p>
        </div>
        <div className="join-date">
          <p className="join">
            Last Updated in{" "}
            {moment(new Date(user?.updatedAt)).format("MMMM,yy")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
