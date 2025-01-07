import { createRoot } from 'react-dom/client'; // Correctly use createRoot here
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);