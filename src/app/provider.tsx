'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/Store'; // adjust path as needed

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
