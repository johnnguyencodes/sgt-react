import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(gradesData => {
        this.setState({
          grades: gradesData
        });
      })
      .catch(err => console.error('Fetch failed:', err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <Header text="Student Grade Table" />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
