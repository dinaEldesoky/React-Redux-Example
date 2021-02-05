import { useRef } from "react";
import { connect } from "react-redux";
import { getStudents } from "../actions";
import { bindActionCreators } from "redux";

const Search = ({ getStudents }) => {
  const studentName = useRef();
  const searchByStudentName = () => {
    console.log(studentName.current.value);
    getStudents();
  };
  return (
    <div className="container">
      <div className="input-group mb-3 mt-3">
        <input
          ref={studentName}
          type="text"
          className="form-control"
          placeholder="Enter student name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={searchByStudentName}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dipatch) => {
  return bindActionCreators({ getStudents }, dipatch);
};

export default connect(null, mapDispatchToProps)(Search);
