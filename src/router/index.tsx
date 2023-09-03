import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AuthLayout, RootLayout } from '../layouts';
import {
  SignupPage,
  LoginPage,
  OfferPage,
  DashboardPage,
  MotorcyclePage,
} from '../pages';
import { ProtectedIAuth } from '../layouts/ProtectedIfAuth';
import { ProtectedIfNotAuth } from '../layouts/ProtectedIfNotAuth';
import { Suspense } from 'react';
import { Spinner } from '../components/ui';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} errorElement={<div>404</div>}>
        <Route index element={<DashboardPage />} />

        <Route
          path='offer'
          element={
            <Suspense fallback={<Spinner />}>
              <OfferPage />
            </Suspense>
          }
        />
        <Route
          path='/motorcycle/:id'
          element={
            <Suspense fallback={<Spinner />}>
              <MotorcyclePage />
            </Suspense>
          }
        />
        <Route element={<ProtectedIfNotAuth />}></Route>
      </Route>

      <Route path='/' element={<ProtectedIAuth />}>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
      </Route>
    </>
  )
);
