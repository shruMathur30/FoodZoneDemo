import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './src/firebase/firebaseConfig';
import { login, logout } from './src/redux/slices/userSlice';
import AppNavigator from './src/navigation/AppNavigator';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, View } from 'react-native';

const AuthProvider = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        dispatch(login({ email: user.email }));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2c3e50" />
      </View>
    );
  }

  return <AppNavigator />;
};

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <AuthProvider />
    </PersistGate>
  </Provider>
);

export default App;
