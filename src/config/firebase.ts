import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getAnalytics,
  isSupported,
  Analytics,
  logEvent,
} from 'firebase/analytics';
import { FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCcJ-3nONEK6VYVrOASd5Gm5t_LaV1bG5E',
  authDomain: 'madhuri-gold-a93a5.firebaseapp.com',
  projectId: 'madhuri-gold-a93a5',
  storageBucket: 'madhuri-gold-a93a5.firebasestorage.app',
  messagingSenderId: '760932632510',
  appId: '1:760932632510:web:edf94127a3888108b09bef',
  measurementId: 'G-CF2BZTKEFX',
};

const app: FirebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

let analytics: Analytics | null = null;

async function initializeFirebaseAnalytics() {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
}

initializeFirebaseAnalytics();

if (analytics) {
  logEvent(analytics, 'analytics_notification_received');
}

export { app, analytics };
