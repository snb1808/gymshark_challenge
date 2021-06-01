import { Component } from 'react';
import './App.css';
import CardColumns from "react-bootstrap/CardColumns";
import { getData } from './adapters/API';
import ExerciseCard from "./components/ExerciseCard/ExerciseCard";

class App extends Component {
  state = { sex: 'female' };

  componentDidMount = () => {
      getData().then(({ exercises }) =>
  this.setState({ exercises }));
  };

  render = () => {
      const { exercises, sex } = this.state;

      return (
          <CardColumns>
              { exercises && exercises.map((exercise, index) =>
                 <ExerciseCard key={index} exercise={exercise} sex={sex}/>
              )}
          </CardColumns>
  )};
}

export default App;
