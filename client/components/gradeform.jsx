import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      course: event.target.value,
      grade: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Add Grade</h2>
          <div className="name-container">
            <i className="fas fa-user fa-lg border border-secondary rounded bg-light"></i>
            <input type="text" className="form-control border border-secondary rounded" id="name" name="name" placeholder="Name" />
          </div>
          <div className="course-container">
            <i className="fas fa-th-list fa-lg border border-secondary rounded bg-light"></i>
            <input type="text" className="form-control border border-secondary" id="course" name="course" placeholder="Course" />
          </div>
          <div className="grade-container">
            <i className="fas fa-user-graduate fa-lg border border-secondary rounded bg-light"></i>
            <input type="number" className="form-control border border-secondary" id="grade" name="grade" placeholder="Grade" />
          </div>
          <div className="button-container no-gutters">
            <button type="submit" className="btn btn-success mr-3">Add</button>
            <button type="reset" className="btn btn-outline-dark">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default GradeForm;
