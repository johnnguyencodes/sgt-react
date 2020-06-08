import React from 'react';

function Grade(props) {
  const grade = props.grade;
  const idAttr = `grade${grade.id}`;
  return (
    <tr id={idAttr}>
      <td>{props.grade.name}</td>
      <td>{props.grade.course}</td>
      <td>{props.grade.grade}</td>
    </tr>
  );
}

function GradeTable(props) {
  return (
    <div className="table-container col-xl-9 col-xs-12 col-sm-10 col-lg-9 col-md-9">
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
            <th className="align-middle">Name</th>
            <th className="align-middle">Course</th>
            <th className="align-middle">Grade</th>
            {/* <th class="align-middle text-right">Operations</th> */}
          </tr>
        </thead>
        <tbody>
          {
            props.grades.map(grade => {
              return (
                <Grade
                  key={grade.id}
                  grade={grade} />
              );
            })}
        </tbody>
      </table>
      {/* <p id="grades-notifier">No Grades Recorded</p> */}
    </div>
  );
}

export default GradeTable;
