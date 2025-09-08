import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import TodoTask from "./components/TodoTask";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Sales from "./components/sales/sales";
// import Auth from "./store/auth";
import Purchase from './components/purchase/purchase';
import Customer from './components/customer/customer';
import ContactUs from './components/contact-us/contact-us';

const router = createBrowserRouter([
  {
    path: "/", element: <Login />
  },
  {
    // element: <Auth />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/sales', element: <Sales /> },
      { path: '/purchase', element: <Purchase /> },
      { path: '/customer', element: <Customer /> },
      { path: '/contact-us', element: <ContactUs /> },
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App;
