export const studentsList = (state = null, action) => {
  console.log("here" + action);
  if (action.type === "STUDENT-LIST") {
    console.log("here" + action);
    return action.payload;
  }
  return state;
};
