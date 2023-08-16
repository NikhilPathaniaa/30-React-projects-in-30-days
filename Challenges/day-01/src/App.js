import './App.css';
import Cars from './Components/Cars';

function App(props) {
  return (
    <div className='App'>
      <div className='person'>
        <img src={props.img}/>
        <h1>My {props.name}</h1>
        <p>My {props.name} is {props.color}</p>
        <p>It's a bit older, from {props.year}</p>
      </div>
      <Cars/>
    </div>
  );
}

export default App;
