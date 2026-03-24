import { Page } from './Page';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <Page />
          </AuthProvider>
        </Router>
      </QueryClientProvider>

    </>
  )
}

export default App
