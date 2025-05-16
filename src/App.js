import "./App.css";
import Accordion from "./components/Accordion";
import ModalTest from "./components/CustomModalPopup/modal-test";
import RandomColorGenerator from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import { Greeting } from "./components/CustomModalPopup/modal-test";
import LoadMoreData from "./components/LoadMoreData/LoadMoreData";
import Counter from "./components/Counter/Counter";
import TodoApp from "./components/TodoApp/TodoApp";
import CountDownTimer from "./components/CountDownTimer/CountDownTimer";
import Stopwatch from "./components/Stopwatch/stopwatch";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import TicTacToe from "./components/Tic-tac-toe/tic-tac-toe";
import SearchAutoSuggest from "./components/SearchAutoSuggest/SearchAutoSuggest";
import FileExplorer from "./components/FIleExplorer/FileExplorer";
import Otp from "./components/Otp/Otp";

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
      {/* <TicTacToe /> */}
      {/* <SearchAutoSuggest /> */}
      {/* <TodoApp /> */}
      {/* <CountDownTimer/> */}
      {/* <DropdownMenu/> */}
      {/* <CountDownTimer/> */}
      {/* <Stopwatch/> */}
      {/* <DigitalClock /> */}
      {/* <Hooks/> */}
      {/* <FileExplorer /> */}
      <Otp/>
    </div>
  );
}

export default App;
