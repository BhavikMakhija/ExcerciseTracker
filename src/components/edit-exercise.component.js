import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

 export default class EditExercise extends React.Component {

      constructor(props) {
         super(props);

         this.onChangeUsername = this.onChangeUsername.bind(this);
         this.onChangeExercise = this.onChangeExercise.bind(this);
         this.onChangeSets = this.onChangeSets.bind(this);
         this.onChangeReps = this.onChangeReps.bind(this);
         this.onChangeDate = this.onChangeDate.bind(this);
         this.onSubmit = this.onSubmit.bind(this);

         this.state = {
            username: '',
            exercise: '',
            sets: 0,
            reps: 0,
            date: new Date(),
            users: []
         }

      }

      onChangeUsername(e) {
         this.setState({
            username: e.target.value
         });
      }

      onChangeExercise(e) {
         this.setState({
            exercise: e.target.value
         });
      }

      onChangeSets(e) {
         this.setState({
            sets: e.target.value
         });
      }

      onChangeReps(e) {
         this.setState({
            reps: e.target.value
         });
      }

      onChangeDate(date) {
         this.setState({
            date: date
         });
      }

      onSubmit(e) {
         e.preventDefault();

         const exercise = {
            username: this.state.username,
            exercise: this.state.exercise,
            sets: this.state.sets,
            reps: this.state.reps,
            date: this.state.date
         }

         console.log(exercise);

         const currentPath = window.location.pathname;
         const id = currentPath.substring(currentPath.lastIndexOf('/') + 1);

         axios.post('http://192.168.2.191:5000/exercises/update/' + id, exercise)
            .then(res => console.log(res.data));

         window.location = '/';
      }

      componentDidMount() {

         const currentPath = window.location.pathname;
         const id = currentPath.substring(currentPath.lastIndexOf('/') + 1);

         axios.get('http://192.168.2.191:5000/exercises/' + id)
            .then(response => {
               this.setState({
                  exercise: response.data.exercise,
                  sets: response.data.sets,
                  reps: response.data.reps,
                  username: response.data.username,
                  date: new Date(response.data.date)
               })
            })
            .catch(function (error) {
               console.log(error);
            })

         axios.get('http://192.168.2.191:5000/users/')
            .then(response => {
               if (response.data.length > 0) {
                  this.setState({
                     users: response.data.map(user => user.username),
                  })
               }
            })
         }

   render() {
      return (
         <div>
            <h3>Edit Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                  <label>Username: </label>
                  <select ref="userInput"
                     required
                     className="form-control"
                     value={this.state.username}
                     onChange={this.onChangeUsername}>
                     {
                        this.state.users.map(function (user) {
                           return <option
                              key={user}
                              value={user}>{user}
                           </option>;
                        })
                     }
                  </select>
               </div>
               <div className="form-group">
                  <label>Exercise: </label>
                  <input type="text"
                     required
                     className="form-control"
                     value={this.state.exercise}
                     onChange={this.onChangeExercise}
                  />
               </div>
               <div className="form-group">
                  <label>Sets: </label>
                  <input type="text"
                     required
                     className="form-control"
                     value={this.state.sets}
                     onChange={this.onChangeSets}
                  />
               </div>
               <div className="form-group">
                  <label>Reps: </label>
                  <input type="text"
                     required
                     className="form-control"
                     value={this.state.reps}
                     onChange={this.onChangeReps}
                  />
               </div>
               <div className="form-group">
                  <label>Date: </label>
                  <div>
                     <DatePicker
                        selected={this.state.date}
                        onChange={this.onChangeDate}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
               </div>
            </form>
         </div>
      );
    }
   }
     