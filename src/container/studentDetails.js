import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudentDetails } from "../actions";

const StudentDetails = ({ getStudentDetails, details, match }) => {
  const id = match.params.id;
  useEffect(() => {
    getStudentDetails(id);

    return () => {
      console.log("unAmount");
    };
  }, []);

  const renderStudentDetails = (details) => {
    if (details && details.id) {
      return (
        <div className="container bg-light">
          <h4>Name : {details.name}</h4>
          <div>Age: {details.age}</div>
          <div>Phone: {details.phone}</div>
        </div>
      );
    }
    return "";
  };
  return (
    <div className="alert alert-light">{renderStudentDetails(details)}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudentDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
