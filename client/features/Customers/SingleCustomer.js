import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser, editUser, selectSingleUser } from "../../Slices/singleUserSlice";
import EditUserForm from "./editCustomerForm";

const User = () => {
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);
    const dispatch = useDispatch();
    const {userId} = useParams();
    const singleUser = useSelector(selectSingleUser)
    const{ username, firstName, lastName} = singleUser
    const [isEditing, setIsEditing] = useState(false);

    useEffect(()=> {
        dispatch(fetchSingleUser(userId))
    },[dispatch]);

    
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveChanges = (editiedUser) => {
    dispatch(editUser(editiedUser))
    setIsEditing(false)
  };

  return (
    <div>
      <div id="singleUser">
        <h3 id="userName">
          {firstName} {lastName}
        </h3>
        <p>{username}</p>
        {isAdmin ? (
          isEditing ? (
            <EditUserForm user={singleUser} onCancelClick={handleCancelClick} onSaveChanges={handleSaveChanges} />
          ) : (
            <button onClick={handleEditClick}>Edit</button>
          )
        ) : null}
        <hr />
      </div>
    </div>
  );

}

export default User