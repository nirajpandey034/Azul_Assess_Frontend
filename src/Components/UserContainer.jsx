import React, { useState, useEffect } from "react";
import UserCardContainer from "./UserCardContainer";
import { Container } from "@mui/material";
import UserActions from "./UserActions";
import LinearProgress from "@mui/material/LinearProgress";

import { getAllUsers } from "../integration/user.api";

export default function UserContainer() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await getAllUsers();
      setUsers(data);
    }
    getUsers();
    window.localStorage.clear();
  }, []);
  return (
    <Container maxWidth="lg">
      <UserActions />
      {users?.length > 0 ? (
        <UserCardContainer users={users} />
      ) : (
        <LinearProgress />
      )}
    </Container>
  );
}
