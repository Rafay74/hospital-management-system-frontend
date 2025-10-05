'use client'

import { Toaster } from 'react-hot-toast'

export const toastOptions = {
  style: {
    borderRadius: '8px',
    background: '#333',
    color: '#fff',
  },
  duration: 3000,
}

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={toastOptions}
    />
  )
}
