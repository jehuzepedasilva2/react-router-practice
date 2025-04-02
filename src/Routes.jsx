import App from './App.jsx'
import Profile from './Profile.jsx'
import Spinach from './Spinach.jsx';
import Popeye from './Popeye.jsx';
import DefaultProfile from './DefaultProfile.jsx';
import ErrorPage from './ErrorPage.jsx'

const routes1 = [
  {
    path: '/', 
    element: <App />,
  },
  {
    path: 'profile', 
    element: <Profile />, 
    children: [
      { index: true, element: <DefaultProfile /> }, // will run by default
      // is rendered using outlet part of profile
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ]
  }
];

const routes2 = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes2;