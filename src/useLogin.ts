import { reactive, toRefs } from '@vue/composition-api'
import firebase from 'firebase/app'

type LoginState = {
  credentials: firebase.auth.UserCredential | null;
  error: any;
  signingIn: boolean;
}

export function useLogin () {
  const state: LoginState = reactive({
    credentials: null,
    error: null,
    signingIn: false,
  })

  const login = () => {
    state.signingIn = true
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.setCustomParameters({
      prompt: 'select_account',
    })
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    provider.addScope('https://www.googleapis.com/auth/userinfo.email')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        state.credentials = result
      })
      .catch(error => {
        state.error = error
        console.error(error)
      })
      .finally(() => state.signingIn = false)
  }

  const logout = () => firebase.auth().signOut()


  return {
    ...toRefs(state),
    login,
    logout
  }
}
