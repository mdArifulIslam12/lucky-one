import './App.css';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shoes></Shoes>
      <Question></Question>
    </div>
  );
}

export default App;
