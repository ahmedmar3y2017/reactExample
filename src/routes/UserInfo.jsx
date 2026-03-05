import React from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();
  console.log(userId);

  return <div>User Info</div>;
};

export default UserInfo;
