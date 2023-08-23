import { RouterProvider } from 'react-router';
import { router } from './router';

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
