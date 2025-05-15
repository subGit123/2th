import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import {Suspense, lazy} from 'react';
import Loading from './components/etc/Loading';

const Home = lazy(() => import('./pages/Home'));
const First = lazy(() => import('./pages/First'));

const router = createBrowserRouter([
  {
    path: `/story`,
    element: <Home />,
  },
  {
    path: '/',
    element: <First />,
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="bodyContanier">
        <RouterProvider router={router} />
      </div>
    </Suspense>
  );
}

export default App;
