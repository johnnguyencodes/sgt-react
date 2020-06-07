import React from 'react';

// eslint-disable-next-line no-unused-vars
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
