import { Routes, Route } from 'react-router-dom';
import { PaginaPrincipal } from './Components/Layouts/PaginaPrincipal/PaginaPrincipal';

function App() {
  
  return (
    <Routes>
      <Route path="/" Component={PaginaPrincipal} />
    </Routes>
  );
}

export default App;
