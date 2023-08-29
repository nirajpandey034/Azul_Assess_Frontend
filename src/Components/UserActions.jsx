import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";

import UserModal from "./Modals/UserModal";
import { addUser } from "../integration/user.api";

export default function UserActions() {
  const [openUserModal, setUserModal] = useState(false);
  const addUserhandler = async (data) => {
    await addUser(data);
  };
  return (
    <Grid container sx={{ m: 5 }}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          sx={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        >
          Azul - User Management System
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="outlined"
          sx={{ textTransform: "none" }}
          onClick={() => setUserModal(true)}
        >
          Add New User
        </Button>
      </Grid>
      <UserModal
        key={openUserModal}
        open={openUserModal}
        setOpen={setUserModal}
        ctaAction={addUserhandler}
        actionType="add"
      />
    </Grid>
  );
}
