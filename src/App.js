import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Store from './store'
import Routes from './routes'

function App() {
  return (
    <>
      <ToastContainer />
      <Store>
        <Routes />
      </Store>
    </>
  );
}

export default App;
