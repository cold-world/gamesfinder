import Home from './pages/Home';
import { GlobalStyle } from './components/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/discover/:id' element={<Home />} />
        <Route path='/game/:id' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
