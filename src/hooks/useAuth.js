import { useState, useEffect } from 'react';
import { auth, isFirebaseConfigured } from '../firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      // Demo Mode: Check local storage for mock user
      const demoUser = localStorage.getItem('demo_user');
      if (demoUser) {
        setCurrentUser(JSON.parse(demoUser));
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    if (!isFirebaseConfigured) {
      // Demo Login
      const user = { uid: 'demo_123', email, displayName: 'Demo User' };
      localStorage.setItem('demo_user', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password) => {
    if (!isFirebaseConfigured) {
      // Demo Signup
      const user = { uid: 'demo_' + Date.now(), email, displayName: 'Demo User' };
      localStorage.setItem('demo_user', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!isFirebaseConfigured) {
      localStorage.removeItem('demo_user');
      setCurrentUser(null);
      return;
    }
    return signOut(auth);
  };

  return {
    currentUser,
    login,
    signup,
    logout,
    loading
  };
}
