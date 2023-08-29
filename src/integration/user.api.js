import axios from "axios";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/getAll`
    );
    return data;
  } catch (err) {
    alert("Some Error Occured, Please Try Again");
    console.error("Error Occured: ", err);
    return [];
  }
};

export const getUserWithEmail = async (email) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/getUserWithEmail`,
      {
        data: {
          email: email,
        },
      }
    );
    return data;
  } catch (err) {
    alert("Some Error Occured, Please Try Again");
    console.error("Error Occured: ", err);
    return [];
  }
};

export const addUser = async (userData) => {
  try {
    if (
      userData.name?.length < 1 ||
      !userData.age ||
      userData.email?.length < 1 ||
      userData?.dob.length < 1 ||
      userData?.address.length < 1
    )
      alert("Please Check provided data");
    else {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/add`,
        {
          name: userData.name,
          age: userData.age,
          email: userData.email,
          dob: userData.dob,
          address: userData.address,
        }
      );
      alert("User Added", data);
      window.location.reload();
      // return data;
    }
  } catch (err) {
    alert("Some Error Occured, Please Try Again");
    console.error("Error Occured: ", err);
    return [];
  }
};

export const updateUser = async (userData) => {
  try {
    if (
      userData.name?.length < 1 ||
      !userData.age ||
      userData?.dob.length < 1 ||
      userData?.address.length < 1
    )
      alert("Please Check provided data");
    else {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/update`,
        {
          name: userData.name,
          age: userData.age,
          email: userData.email,
          dob: userData.dob,
          address: userData.address,
        }
      );
      alert("User Updated", data);
      window.location.reload();
      // return data;
    }
  } catch (err) {
    alert("Some Error Occured, Please Try Again");
    console.error("Error Occured: ", err);
    return [];
  }
};

export const deleteUser = async (email) => {
  try {
    if (email.length < 1) alert("Please Check provided data");
    else {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/delete`,
        {
          data: { email: email },
        }
      );
      alert("User Deleted", data);
      window.location.reload();
      // return data;
    }
  } catch (err) {
    alert("Some Error Occured, Please Try Again");
    console.error("Error Occured: ", err);
    return [];
  }
};
