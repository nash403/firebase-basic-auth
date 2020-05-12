import firebase from 'firebase/app'
import { reactive, toRefs } from '@vue/composition-api'
import { isStandaloneMode } from '@/util/functions'

type LoginState = {
  credentials: firebase.auth.UserCredential | null;
  error: Error | null;
  signingIn: boolean;
}

export function useLogin () {
  const state: LoginState = reactive({
    credentials: null,
    error      : null,
    signingIn  : false,
  })

  const login = () => {
    state.signingIn = true
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    provider.addScope('https://www.googleapis.com/auth/userinfo.email')
    const auth = firebase.auth()
    if (isStandaloneMode()) {
      auth.signInWithRedirect(provider)
    } else {
      auth
        .signInWithPopup(provider)
        .then(result => {
          state.credentials = result
        })
        .catch(error => {
          state.error = error
          console.error(error)
        })
        .finally(() => (state.signingIn = false))
    }
  }

  const logout = () => firebase.auth().signOut()

  return {
    ...toRefs(state),
    login,
    logout,
  }
}
