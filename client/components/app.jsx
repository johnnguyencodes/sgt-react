import React from 'react';
import Header from './header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <Header />
    );
  }
}

export default App;
