import React from "react";
import image from "../assets/profile.png";

const UserCard = (props) => {
  return (
    <div className="usercard">
      <div>
        <img className="user-image" src={image} alt="User"></img>
      </div>
      <div className="user-info">
        <div className="user-name">{props.userprop.name}</div>
        <div className="user-email">{props.userprop.email}</div>
      </div>
    </div>
  );
};

export default UserCard;
