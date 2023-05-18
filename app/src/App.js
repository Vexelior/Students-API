import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navbar/Nav';
import Home from './Home/Home';
import AddStudent from './Students/Add/StudentAdd';

const App = () => {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/student/add" element={<AddStudent/>}/>
      </Routes>
  </Router>
  </>
  );
}

export default App;
