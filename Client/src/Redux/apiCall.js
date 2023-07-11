import { selectComponent } from "./uiSlice";
import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import Axios from "axios";
import { apidomain } from "../utils/domain";

export const display = (dispatch, component) => {
  dispatch(selectComponent(component));
};

export const loginUser = async (dispatch, user) => {
  
  // console.log(user);
  dispatch(loginStart());
  try {
    const { data } = await Axios.post(`${apidomain}/auth/login`, user);
    if (data.token) {
      dispatch(loginSuccess(data));
      alert("Login successful");
    }
  } catch (error) {
    dispatch(loginFailure());
    alert("Login failed");
  }
};
