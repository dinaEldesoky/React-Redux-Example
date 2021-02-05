import { Component } from "react";
import { connect } from "react-redux";
import { getStudents } from "../actions";
import Student from "../components/student";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

const StudentList = ({ getStudents, list, history, match }) => {
  //const id = match.params.id;
  useEffect(() => {
    getStudents();
    return () => {
      console.log("unAmount");
    };
  }, []);

  const renderStudentDetails = (list) => {
    if (list) {
      return (
        <div className="container">
          <div>
            {list.map((student) => {
              console.log("here");
              return (
                <Student
                  key={student.id}
                  studentInfo={student}
                  history={history}
                />
              );
            })}
          </div>
        </div>
      );
    }
    return "";
  };
  return <div className="alert alert-light">{renderStudentDetails(list)}</div>;
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getStudents }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);

// class StudentList extends Component {
//   render() {
//     return <div>{this.renderStudent(this.props)}</div>;
//   }

//   renderStudent({ List, history }) {
//     console.log(List);
//     if (List) {
//       return (
//         <div className="container">
//           <div>
//             {List.map((student) => {
//               console.log("here");
//               return (
//                 <Student
//                   key={student.id}
//                   studentInfo={student}
//                   history={history}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       );
//     }
//     return <p>Enter a valid student name</p>;
//   }

//   componentDidMount() {
//     getStudents();
//     console.log("did mount");
//     //console.log(getStudents());
//   }
//   componentDidUpdate() {
//     //this.props.getStudents();
//     //console.log("did update" + getStudents());
//   }
// }
// const mapDispatchToProps = (dipatch) => {
//   return bindActionCreators({ getStudents }, dipatch);
// };
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     List: state.list,
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
