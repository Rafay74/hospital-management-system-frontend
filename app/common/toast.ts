import toast from 'react-hot-toast'
import { toastOptions } from '../providers/toast-provider'

type ToastType = 'success' | 'error' | 'loading' | 'info'

export function showToast(message: string, type: ToastType = 'success') {
  switch (type) {
    case 'success':
      toast.success(message, toastOptions)
      break
    case 'error':
      toast.error(message, toastOptions)
      break
    case 'loading':
      toast.loading(message, toastOptions)
      break
    case 'info':
      toast(message, toastOptions)
      break
    default:
      toast(message, toastOptions)
  }
}
