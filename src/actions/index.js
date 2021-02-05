const baseURL = "http://localhost:3001/students";

export const getStudents = async () => {
  let payload;
  try {
    let response = await fetch(`${baseURL}`);
    payload = await response.json();
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "STUDENT-LIST",
    payload,
  };
};

export const getStudentDetails = async (id) => {
  let payload;
  try {
    let response = await fetch(`${baseURL}/${id}`);
    payload = await response.json();
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "STUDENTS-DETAILS",
    payload,
  };
};
