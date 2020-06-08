import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './gradeform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
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

  addGrade(newGrade) {
    fetch('/api/grades', {
      method: 'POST',
      body: JSON.stringify(newGrade),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          grades: this.state.grades.concat(newGrade)
        });
      })
      .catch(err => console.error('Fetch failed:', err));
  }

  deleteGrade(gradeId) {
    fetch(`api/grades/${gradeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const gradesCopy = this.state.grades.slice();
        var index = gradesCopy.map(x => {
          return x.id;
        }).indexOf(gradeId);
        gradesCopy.splice(index, 1);
        this.setState(state => ({
          grades: gradesCopy
        })
        );
      });
  }

  getAverageGrade() {
    const grades = this.state.grades;
    let addedStudentGrades = 0;
    for (var i = 0; i < grades.length; i++) {
      addedStudentGrades += grades[i].grade;
    }
    let newAverage = null;
    if (!(grades.length)) {
      newAverage = '--';
      return newAverage;
    } else {
      newAverage = Math.ceil(addedStudentGrades / grades.length);
      return newAverage;
    }
  }

  render() {
    return (
      <div>
        <Header text="Student Grade Table" averageGrade={this.getAverageGrade()} />
        <div className="row">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
          <GradeForm onSubmit={this.addGrade}/>
        </div>
      </div>
    );
  }
}

export default App;
