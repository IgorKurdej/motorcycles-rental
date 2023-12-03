import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import {
  AuthLayout,
  RootLayout,
  ProtectedIfAuth,
  ProtectedIfNotAuth,
} from '../layouts';
import {
  SignupPage,
  LoginPage,
  AllMotorcyclesPage,
  DashboardPage,
  MotorcyclePage,
  UserDetailsPage,
  CartPage,
  UserReservationsPage,
} from '../pages';
import { Suspense } from 'react';
import { Spinner } from '../components/ui';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />} errorElement={<div>404</div>}>
        <Route index element={<DashboardPage />} />
        <Route
          path='motorcycles'
          element={
            <Suspense fallback={<Spinner />}>
              <AllMotorcyclesPage />
            </Suspense>
          }
        />
        <Route
          path='/motorcycles/:id'
          element={
            <Suspense fallback={<Spinner />}>
              <MotorcyclePage />
            </Suspense>
          }
        />
        <Route
          path='/cart'
          element={
            <Suspense fallback={<Spinner />}>
              <CartPage />
            </Suspense>
          }
        />

        <Route element={<ProtectedIfNotAuth />}>
          <Route
            path='/user'
            element={
              <Suspense fallback={<Spinner />}>
                <UserDetailsPage />
              </Suspense>
            }
          />
          <Route
            path='/reservations'
            element={
              <Suspense fallback={<Spinner />}>
                <UserReservationsPage />
              </Suspense>
            }
          />
        </Route>
      </Route>

      <Route path='/' element={<ProtectedIfAuth />}>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
      </Route>
    </>
  )
);
