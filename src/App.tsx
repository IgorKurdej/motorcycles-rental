import { RouterProvider } from 'react-router';
import { router } from './router';

function App() {
  return (
    // <div className='flex items-center justify-center'>
    <RouterProvider router={router} />
    // </div>
  );
}

export default App;
