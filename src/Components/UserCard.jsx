import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function UserCard({
  name = "",
  age = "",
  email = "",
  dob = "",
  address = "",
  setUserModal,
  setConfirmationModal,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Profile Image"
        height="140"
        image="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1693331536~exp=1693332136~hmac=f545a527fbb20e7e3853a5533ac168501241cf0e5002a50a17a89dcd94fda1b6"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Email:</strong> <a href={"mailto:" + email}>{email}</a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date Of Birth:</strong> {dob}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Age:</strong> {age}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address:</strong> {address}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 2 }}
        >
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => {
              localStorage.setItem(
                "selectedUser",
                JSON.stringify({ name, email, age, dob, address })
              );
              setUserModal(true);
            }}
          >
            Update Details
          </Button>
          <Button
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => {
              localStorage.setItem("selectedEmail", email);
              setConfirmationModal(true);
            }}
          >
            Delete User
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
