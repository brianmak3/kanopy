import React from 'react';
import Navigation from './components/navigation'
import './App.css';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <Navigation />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
