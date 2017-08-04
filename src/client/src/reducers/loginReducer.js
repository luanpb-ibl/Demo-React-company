const LOGIN = 'LOGIN_ABC';
var defaultstate = {
  // user:{username:"test",password:"passwrod"},
  // isLogin:false
  status: false,
  errCode: ''
}
export default (state = defaultstate, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state,
        ...action.result
      }
    default:
      return state
  }
}