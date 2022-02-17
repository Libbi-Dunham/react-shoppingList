import './App.css';
import Header from './Components/Header/Header';
import { ListProvider } from './Context/ListContext';
import Shopping from './Views/Shopping/Shopping';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Header />
        <Shopping />
      </div>
    </ListProvider>
  );
}

export default App;
