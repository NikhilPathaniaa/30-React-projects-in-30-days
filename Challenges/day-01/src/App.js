import './App.css';
import Cards from './Components/Cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function App() {
  return (
    <>
      <Cards
        image='./images/jayant-dassz.jpg'
        name='jayant'
        age={24}
      />
    </>
  );
}

export default App;
