import { QueryClient, QueryClientProvider } from 'react-query';
import Table from './components/Table';
import "./styles/App.scss"
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <div className='header'>
            <img className='logo' src="https://imgs.search.brave.com/GrZrRGG8xMZebBFfT83yqESNErM-ir_fBb88VbBdcB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzMzLzE0LzQw/LzM2MF9GXzIzMzE0/NDA2NV9EZmFocTdC/d3c2UXNrOHlrSFpk/WTJTbmYyN0VxczdK/dy5qcGc" alt="logo"></img>
            <h1>Recruitment task</h1>
          </div>
          <div className='content'>
            <Sidebar></Sidebar>
            <div className='main'>
              <Table></Table>
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
