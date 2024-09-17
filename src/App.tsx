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
            <img className='logo' src="https://imgs.search.brave.com/P4tcibQVp6rL6dQScyuxVH9crrMFeOH3MUKw7eFTdoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/ODk2MDU3Mi92ZWN0/b3IvY2xvdWQtY29t/cHV0aW5nLWljb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PS05bXJ6MHZsdm1G/ZW9OX1ZmTWVBOGhS/OTJOcExGT0ltc1hR/cHk0LTFmWHc9" alt="logo"></img>
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
