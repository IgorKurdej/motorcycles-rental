import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AuthLayout, RootLayout } from '../layouts';
import { SignupPage, LoginPage, OfferPage, DashboardPage } from '../pages';
import { ProtectedIAuth } from '../layouts/ProtectedIfAuth';
import { ProtectedIfNotAuth } from '../layouts/ProtectedIfNotAuth';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} errorElement={<div>404</div>}>
        <Route index element={<DashboardPage />} />

        <Route element={<ProtectedIfNotAuth />}>
          <Route path='offer' element={<OfferPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedIAuth />}>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
      </Route>
    </>
  )
);
