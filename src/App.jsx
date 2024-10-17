import './App.css';
import SimpleForm from './component/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import router components

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<SimpleForm />} />
        {/* You can define more routes here */}
      </Routes>
    </Router>
  );
}
export default App;