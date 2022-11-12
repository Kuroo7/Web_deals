import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/profile'
import Home from './pages/home'
import Navbar from './components/navbar';
import SignUp from './pages/signUp';
import Login from './pages/login';
import Deals from './pages/Deals';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/signUp'
              element={<SignUp />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/Deals'
              element={<Deals />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
