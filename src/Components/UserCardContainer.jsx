import React, { useState } from "react";
import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import ConfirmationModal from "./Modals/ConfirmationModal";
import UserModal from "./Modals/UserModal";

import { deleteUser, updateUser } from "../integration/user.api";

export default function UserCardContainer({ users = [] }) {
  const [openConfirmationModal, setConfirmationModal] = useState(false);
  const [openUserModal, setUserModal] = useState(false);
  const deleteUserHandler = async () => {
    // will take selected user email address from localstorage and pass to delete util function
    await deleteUser(window.localStorage.getItem("selectedEmail"));
  };
  const updateUserhandler = async (data) => {
    await updateUser(data);
  };
  return (
    <Grid container spacing={2}>
      {users.map((user) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={user?.email}>
            <UserCard
              name={user.name}
              age={user.age}
              email={user.email}
              dob={user.dob}
              address={user.address}
              setConfirmationModal={setConfirmationModal}
              setUserModal={setUserModal}
            />
          </Grid>
        );
      })}
      <ConfirmationModal
        open={openConfirmationModal}
        setOpen={setConfirmationModal}
        ctaAction={deleteUserHandler}
      />
      <UserModal
        key={openUserModal}
        open={openUserModal}
        setOpen={setUserModal}
        ctaAction={updateUserhandler}
        actionType="update"
      />
    </Grid>
  );
}
