import './App.css';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import NewData from './Components/NewData';
import NewFile from './Components/NewFile';
import Error from './Components/Error';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
        <Routes>
          <Route
            path='/about'
            element={<About />}
          />
        </Routes>
        <Routes>
          <Route
            path='/error'
            element={<Error />}
          />
        </Routes>
        <Routes>
          <Route
            path="/newData"
            element={<ProtectedRoute Component={NewData} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/newFile"
            element={<ProtectedRoute Component={NewFile} />}
          />
        </Routes>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
