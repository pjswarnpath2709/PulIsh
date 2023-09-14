// Profile.jsx
import moment from "moment";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  const openEditProfileModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && (
        <EditProfileModal open={openModal} handleClose={closeModal} />
      )}
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

          <div className="edit-profile-button-container">
            <button
              className="edit-profile-button"
              onClick={openEditProfileModal}
            >
              Edit Profile
            </button>
          </div>

          <div className="edit-profile-button-container">
            <Link
              style={{ textDecoration: "none" }}
              to={"/dashboard/changepassword"}
              className="edit-profile-button"
            >
              Change Password
            </Link>
          </div>

          <div className="join-date">
            <p className="join">
              Joined on{" "}
              {moment(new Date(user?.createdAt)).format("D MMMM YYYY")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
