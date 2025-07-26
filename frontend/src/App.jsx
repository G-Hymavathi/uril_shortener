import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import Profile from './Pages/Profile';
import ShortenURLs from './Pages/ShortenURLs'; 
import MyURL from './Pages/MyURL';



function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/shorten' element={<ShortenURLs />} />
            <Route path='/myUrls' element={<MyURL />} />
            <Route element={<PrivateRoute/>}>

            </Route>
        </Routes>
    </Router>
  )
}

export default App
