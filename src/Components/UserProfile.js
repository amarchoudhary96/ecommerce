import React from "react";
import { useSelector } from "react-redux";
import "./userprofile.css";
import { Navigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useSelector((store) => store.user);

 
  return (
    <div className="userprofile-outercontainer">
      {user ? (
        <div className="user-profile">
          <p> Your Account Details</p>
          <div className="data-row">
            <span>Your Name</span>
            <span>{user.username}</span>
          </div>
          <div className="data-row">
            <span>Your Email</span>
            <span>{user.email}</span>
          </div>
          <div className="data-row">
            <span>Your PhoneNumber</span>
            <span>{user.phonenumber}</span>
          </div>
          <div className="data-row">
            <span>Your Address</span>
            <span>{user.address}</span>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center text-lg mb-[250px]"><h1>You Are Not Logged In</h1>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
