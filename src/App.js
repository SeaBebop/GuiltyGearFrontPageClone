import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';

import Home from './pages/home';

import Layout from './components/layout';
function App() {
  return (
 <div>

    <Routes>
     <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home/>} />
    </Route>
    </Routes>

 </div>

  );
}

export default App;
