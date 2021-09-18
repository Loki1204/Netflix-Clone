import axios from "axios";
import { getUsersStart, getUsersSuccess, getUsersFailure } from "./UserActions";

// Getting all Users
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get("http://localhost:5000/api/users", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
      },
    });
    console.log(res);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
