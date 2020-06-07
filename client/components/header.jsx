import React from 'react';

function Header(props) {
  return (
    <header className="row col-12 no-gutters p-0">
      <div className="title col-6 text-xl-left ">
        <h1 className="mb-4">{props.text}</h1>
      </div>
      <div className="col-6 text-xl-right" id="badge">
        <h3>Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h3>
      </div>
    </header>
  );
}

export default Header;
