import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Modal,
  Grid,
  Stack,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function UserModal({ open, setOpen, ctaAction, actionType }) {
  const handleClose = () => setOpen(false);
  const [userData, setUserData] = useState({});
  const [image, setImage] = useState("");
  useEffect(() => {
    if (actionType === "update") {
      const data = JSON.parse(window.localStorage.getItem("selectedUser"));
      if (data && Object.keys(data)?.length > 0) setUserData(data);
    }
  }, [actionType]);

  const dataChangeHandler = (field, value = "") => {
    setUserData({ ...userData, ...{ [field]: value } });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    console.log(image);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="md" sx={style}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  id="image-input"
                  type="file"
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={userData.name}
                  onChange={(e) => {
                    dataChangeHandler("name", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Age"
                  variant="outlined"
                  value={userData.age}
                  type="number"
                  onChange={(e) => {
                    dataChangeHandler("age", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  disabled={actionType === "update" ? true : false}
                  value={userData.email}
                  onChange={(e) => {
                    dataChangeHandler("email", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  variant="outlined"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={userData.dob}
                  onChange={(e) => {
                    dataChangeHandler("dob", e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={userData.address}
                  onChange={(e) => {
                    dataChangeHandler("address", e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
              justifyContent="space-around"
              alignItems="center"
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  ctaAction(userData);
                }}
              >
                {actionType === "update" ? (
                  <span>Update</span>
                ) : (
                  <span>Add</span>
                )}
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Container>
      </Modal>
    </div>
  );
}
