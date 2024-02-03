import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import './App.css';



function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <div className="container">
      <Routes>
      <Route path="/" exact Component={ExerciseList} />
      <Route path="/edit/:id" Component={EditExercise} />
      <Route path="/create" Component={CreateExercise} />
      <Route path="/user" Component={CreateUser} />
      </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
