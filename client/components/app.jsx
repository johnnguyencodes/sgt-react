import React from 'react';
import Header from './header';
import GradeTable from './gradetable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
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

  getAverageGrade() {
    const grades = this.state.grades;
    let addedStudentGrades = 0;
    for (var i = 0; i < grades.length; i++) {
      addedStudentGrades += grades[i].grade;
    }
    const newAverage = Math.ceil(addedStudentGrades / grades.length);
    return newAverage;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <Header text="Student Grade Table" averageGrade={this.getAverageGrade()} />
            <GradeTable grades={this.state.grades} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
