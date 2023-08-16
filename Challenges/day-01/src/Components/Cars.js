import React from 'react'
import ReactDOM from 'react-dom/client';
export default function Cars(props) {
  return (
    <div className="car">
      <h1>My {props.name}</h1>
      <p>
        My {props.name} is {props.color}
      </p>
      <p>It's a bit older, from {props.year}</p>
    </div>
  );
}
let app = (
    <div class="cars">
      <Cars
        make="BMW"
        color="blue"
        year="2011"
        imgUrl="https://www.codingexercises.com/img/2022-01-25/001-bmw-blue.jpg"
      />
      <Cars
        make="Mercedes"
        color="gray"
        year="2018"
        imgUrl="https://www.codingexercises.com/img/2022-01-25/002-mercedes-gray.jpg"
      />
      <Cars
        make="Toyota"
        color="gray"
        year="new"
        imgUrl="https://www.codingexercises.com/img/2022-01-25/003-toyota-gray.jpg"
      />
      <Cars
        make="Alpha Romeo"
        color="red"
        year="2012"
        imgUrl="https://www.codingexercises.com/img/2022-01-25/004-alpha-romeo-red.jpg"
      />
    </div>
  );
  
  ReactDOM.render(app, document.querySelector("#app"));
