import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../App.css";

export default class ExerciseList extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeDelete = this.onChangeDelete.bind(this);
    this.onChangeEdit = this.onChangeEdit.bind(this);


    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://192.168.2.191:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeDelete(id) {
    axios.delete('http://192.168.2.191:5000/exercises/' + id)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  
  onChangeEdit(id) {
    <Link to={"/edit/" + id}>edit</Link>
  }



  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Date</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map(exercise => {
              return (
                <tr>
                  <td>{exercise.username}</td>
                  <td>{exercise.exercise}</td>
                  <td>{exercise.sets}</td>
                  <td>{exercise.reps}</td>
                  <td>{exercise.date.substring(0, 10)}</td>
                  <td>
                    <a href="#" onClick={() => { this.onChangeDelete(exercise._id) }}>delete</a>
                  </td>
                  <td>
                    <Link to={"/edit/" + exercise._id}>edit</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
