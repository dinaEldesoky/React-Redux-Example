import { combineReducers } from "redux";
import { studentsDetails } from "./studentDetails";
import { studentsList } from "./studentsList";
export default combineReducers({
  list: studentsList,
  details: studentsDetails,
});
