import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Navbar/Nav';
import Home from './Home/Home';
import AddStudent from './Students/Add/StudentAdd';
import UpdateStudent from './Students/Update/StudentUpdate';

const App = () => {
  return (
    <>
    <Nav/>
    <Router>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/student/add" element={<AddStudent/>}/>
        <Route path="/student/update/:id" element={<UpdateStudent/>}/>
      </Routes>
  </Router>
  </>
  );
}

export default App;
