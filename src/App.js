
import './App.css';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './Components/shared/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}>

          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
