import Auth from './Auth';
import Layout from './Layout';
import StartPage from './StartPage';
import Login from './Login';
import Signup from './Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/auth' element={<Auth/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
