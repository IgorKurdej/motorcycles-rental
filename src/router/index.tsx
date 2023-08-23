import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AuthLayout } from '../layouts';
import { LoginPage } from '../pages/LoginPage';
import { SignUp } from '../pages/SignUp';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />} errorElement={<div>404</div>}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </>
  )
);
