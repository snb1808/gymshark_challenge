import { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import { getData } from './adapters/API';
import ExerciseCard from './components/ExerciseCard/ExerciseCard';
import Header from "./components/Header/Header";
import './App.css';

class App extends Component {
  state = { gender: 'female' };

  componentDidMount = () => {
      getData().then(({ exercises }) => this.setState({ exercises, filteredExercises: exercises }));
  };

  setGender = (gender) => this.setState({ gender });

  filterExercises = (event) => {
    this.setState({
        filteredExercises: this.state.exercises.filter(({ bodyAreas }) =>
            bodyAreas.toString().toLowerCase().includes(event.target.value.toLowerCase())
        )});
  };

  render = () => {
      const { filteredExercises, gender } = this.state;

      return (
          <div className='app'>
              <Header filterExercises={this.filterExercises} setGender={this.setGender} gender={gender}/>
              <CardColumns>
                  {filteredExercises && filteredExercises.map((exercise, index) =>
                     <ExerciseCard key={index} exercise={exercise} gender={gender}/>
                  )}
              </CardColumns>
          </div>
  )};
}

export default App;
