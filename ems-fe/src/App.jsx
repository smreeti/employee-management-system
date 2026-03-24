import { Page } from './Page';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';

function App() {
  return (
    <>
      <Router>
        <AuthProvider> <Page /></AuthProvider>
      </Router>
    </>
  )
}

export default App
