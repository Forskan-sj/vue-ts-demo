import store from './index'

export const setAppName = (name: string) => {
  store.dispatch('user/setVal', name).catch( (e) => {
    console.log('app/setName error' + e);
  })
}

export const setAppVal = (val: string) => {
  store.dispatch('user/setVal', val).catch( (e) => {
    console.log('app/setName error' + e);
  })
}

export const setUserName = (name: string) => {
  store.dispatch('user/setVal', name).catch( (e) => {
    console.log('user/setName error' + e);
  })
}

export const setUserVal = (val: string) => {
  store.dispatch('user/setVal', val).catch( (e) => {
    console.log('user/setName error' + e);
  })
}
