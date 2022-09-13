import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ login }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);
  return <h1>Profile page</h1>;
};

export default Profile;
