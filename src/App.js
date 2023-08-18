import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/products" element={<DashboardPage/>} />
       <Route path="/products/new" element={<CreatePage/>} />
       <Route path="/products/:id" element={<DetailsPage/>} />
       <Route path="/products/:id/edit" element={<EditPage/>} />
      </Routes>
    </div>
  );
}

export default App;
