export const studentsDetails = (state = null, action) => {
  console.log("here" + action);
  if (action.type === "STUDENTS-DETAILS") {
    console.log("here" + action);
    return action.payload;
  }
  return state;
};
