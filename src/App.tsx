import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/Table';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Table></Table>
      </div>
    </QueryClientProvider>
  );
}

export default App;
