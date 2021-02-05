const Student = ({ studentInfo, history }) => {
  const goToDetails = () => {
    history.push(`/students/${studentInfo.id}`);
  };

  if (studentInfo) {
    return (
      <div className="alert alert-info">
        <h5 onClick={goToDetails}>{studentInfo.name}</h5>
      </div>
    );
  }
  return <div>Student Component</div>;
};

export default Student;
