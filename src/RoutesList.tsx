import { Routes, Route } from 'react-router-dom';
import userContext from "./userContext";
import { useContext } from 'react';
import { UserLoginForm } from './forms/UserLoginForm';
import { UserRegistrationForm } from './forms/UserRegistrationForm';
import NavBar from './NavBar';
import { UserFormData, UserLoginData } from './user';
import Home from './Home';

interface RoutesListPropsInterface {
  login: (user: UserLoginData) => Promise<void>,
  register: (user: UserFormData) => Promise<void>;
}

//TODO: fix this when routes are done

function RoutesList({ login, register }: RoutesListPropsInterface) {
  const { user } = useContext(userContext);

  function loggedOutRoutes() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<UserLoginForm login={login} />} />
          <Route path="/register" element={<UserRegistrationForm register={register} />} />
        </Routes>
      </>
    );
  }

  function loggedInRoutes() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<UserLoginForm login={login} />} />
          <Route path="/register" element={<UserRegistrationForm register={register} />} />
        </Routes>
      </>
    );
  }

  if (user) {
    return loggedInRoutes();
  } else {
    return loggedOutRoutes();
  }
}

export default RoutesList;