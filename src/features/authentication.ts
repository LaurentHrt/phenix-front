import { createSlice } from '@reduxjs/toolkit'
import { selectAuthentication } from '../utils/selectors'
import { AppDispatch, RootState } from '../utils/store'
import { STATUS_TYPES, I_Error, I_StatusType } from '../utils/type'

const api = `http://${import.meta.env.VITE_API}:${
  import.meta.env.VITE_PORT
}/api/auth/login`

interface I_AuthenticationResponseData {
  status: I_StatusType
  token: string
  error: I_Error
}

const initialState: I_AuthenticationResponseData = {
  status: STATUS_TYPES.VOID,
  token: null,
  error: undefined,
}

const sessionState = JSON.parse(sessionStorage.getItem('authenticationState'))

export function fetchorUpdateUserToken(username: string, password: string) {
  return async (dispatch: AppDispatch, getState: RootState) => {
    const status: I_StatusType = selectAuthentication(getState()).status
    if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
      return
    }
    dispatch(actions.fetching())
    try {
      const body = JSON.stringify({
        email: username,
        password: password,
      })

      const response = await fetch(api, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: body,
      })
      const data: I_AuthenticationResponseData = await response.json()
      if (response.ok) dispatch(actions.resolved(data.token))
      else throw data.error
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const { actions, reducer } = createSlice({
  name: 'authentication',
  initialState: sessionState || initialState,
  reducers: {
    fetching: {
      prepare: (username, password) => {
        return { payload: { username, password } }
      },
      reducer: (draft) => {
        if (draft.status === STATUS_TYPES.VOID) {
          draft.status = STATUS_TYPES.PENDING
          return
        }
        if (draft.status === STATUS_TYPES.REJECTED) {
          draft.error = null
          draft.status = STATUS_TYPES.PENDING
          return
        }
        if (draft.status === STATUS_TYPES.RESOLVED) {
          draft.status = STATUS_TYPES.UPDATING
          return
        }
        return
      },
    },
    logout: () => {
      sessionStorage.clear()
      return initialState
    },
    resolved: {
      prepare: (token) => {
        return { payload: token }
      },
      reducer: (draft, action: PayloadAction<any>) => {
        if (
          draft.status === STATUS_TYPES.PENDING ||
          draft.status === STATUS_TYPES.UPDATING
        ) {
          draft.token = action.payload
          draft.status = STATUS_TYPES.RESOLVED
          return
        }
        return
      },
    },
    rejected: {
      prepare: (errorMessage) => {
        return { payload: errorMessage }
      },
      reducer: (draft, action: PayloadAction<any>) => {
        if (
          (draft.status =
            STATUS_TYPES.PENDING || draft.status === STATUS_TYPES.UPDATING)
        ) {
          draft.error = action.payload
          draft.token = null
          draft.status = STATUS_TYPES.REJECTED
          return
        }
        return
      },
    },
  },
})

export default reducer
