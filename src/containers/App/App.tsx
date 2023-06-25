import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import routesConfig from '../../routes/routesConfig'; 
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.module.css';

const App = () => {

  return (
    <>
      <Header/>
            {/* <BrowserRouter>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route 
                            key={index}
                            path={route.path} 
                            element={route.element} 
                        />
                    ))}
                </Routes>
            </BrowserRouter> */}
            <HashRouter>
                <Routes>
                    {routesConfig.map((route, index) => (
                        <Route 
                            key={index}
                            path={route.path} 
                            element={route.element} 
                        />
                    ))}
                </Routes>
            </HashRouter>
      <Footer/>
    </>
  );
}

export default App;
