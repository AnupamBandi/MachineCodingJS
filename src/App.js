import "./App.css";
import Accordion from "./components/Accordion";
import ModalTest from "./components/CustomModalPopup/modal-test";
import RandomColorGenerator from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import {Greeting} from "./components/CustomModalPopup/modal-test"
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import Counter from "./components/Counter/Counter";
import TodoApp from "./components/TodoApp/TodoApp";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import Stopwatch from "./components/Stopwatch/stopwatch";
import DigitalClock from "./components/DigitalClock/DigitalClock";

function App() {
  
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <ModalTest /> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating noOfStars ={5}/> */}
      {/* <ImageCarousel url={"https://picsum.photos/v2/list"} limit={10} page={5}/> */}
      {/* <Greeting name= 'Anirudh' age = '22'/> */}
      {/* <LoadMoreData /> */}
      {/* <Counter abc=''></Counter> */}
      <TodoApp />
      {/* <CountDownTimer/> */}
      {/* <DropdownMenu/> */}
      {/* <CountDownTimer/> */}
      {/* <Stopwatch/> */}
      <DigitalClock />
      

    </div>
  );
}

export default App;
