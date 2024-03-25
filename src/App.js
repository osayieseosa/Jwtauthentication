import Auth from './Auth';
import Layout from './Layout';
import StartPage from './StartPage';
import Login from './Login';
import Signup from './Signup';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import { VerifyEmailPage } from './VerifyEmailPage';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/auth' element={<Auth/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="users/:id/verify/:token" element={<VerifyEmailPage/>}/>
                </Route>
            </Route>
        </Routes>
    );
}
//http://localhost:3000/auth/users/65ff35bfc9d3c35eaad5ebfc/verify/56ee223f090af8b6843f1320599d39c0c99a2a5bbace763934ff2e8808cb838e
export default App;
