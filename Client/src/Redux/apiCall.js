import { selectComponent } from "./uiSlice";

export const display = (dispatch, component) => {
  dispatch(selectComponent(component));
};
