import React from 'react';

function Header(props) {
  return (
    <div>
      <h1 className="mb-4">{props.text}</h1>

    </div>
  );
}

export default Header;
