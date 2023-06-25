import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.module.css';

const App = () => {

  return (
    <>
      <Header/>
            <BrowserRouter>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route 
                            key={index}
                            path={route.path} 
                            element={route.element} 
                        />
                    ))}
                </Routes>
            </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
