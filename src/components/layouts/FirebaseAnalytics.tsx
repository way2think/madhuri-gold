'use client';

import { useEffect } from 'react';
import { analytics } from '@/config/firebase';

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
      // Analytics is initialized in firebase.ts
    }
  }, []);

  return null;
}
