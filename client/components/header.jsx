import React from 'react';

function Header(props) {
  return (
    <header className="row col-12 no-gutters">
      <div className="title col-xl-4 col-xs-12 text-xl-left">
        <h1 className="mb-4">{props.text}</h1>
      </div>
      <div className="col-xl-4"></div>
      <div className="col-xl-4 col-xs-12 text-xl-right" id="badge">
        <h3>Average Grade <span className="badge badge-secondary">{props.averageGrade}</span></h3>
      </div>
    </header>
  );
}

export default Header;
