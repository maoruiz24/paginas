import { RouterProvider } from 'react-router-dom';
import router from './navigate/Index';



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
