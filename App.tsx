import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase/firebaseConfig';
import { login, logout } from './src/redux/slices/userSlice';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const AuthProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch(login({ email: user.email }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <AppNavigator />;
};

const App = () => (
  <Provider store={store}>
    <AuthProvider />
  </Provider>
);

export default App;
