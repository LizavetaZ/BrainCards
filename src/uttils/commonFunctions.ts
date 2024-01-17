import { toast } from 'react-toastify'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export const showResultToast = <T>(
  result: { data: T } | { error: FetchBaseQueryError | SerializedError }
) => {
  if ('error' in result) {
    const error = result.error as FetchBaseQueryError | SerializedError

    if ('data' in error) {
      const errorData = error.data as any

      if (errorData.errorMessages && errorData.errorMessages.length > 0) {
        toast.error(errorData.errorMessages[0])
      } else {
        toast.error('An error occurred')
      }
    } else {
      toast.error('An error occurred')
    }
  } else {
    toast.success('Success')
  }
}
