const LOGIN_ACTION = 'LOGIN_ABC';

// normal action
const updateLoginInfo = (result) => {
    return {
        type: LOGIN_ACTION,
        result
    }
}

// async action
export const acLogin = (obj) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        if (obj.username === "test" & obj.password === "password") {
            return resolve({
                info: obj,
                status: true
            })
        }
        return reject({
            info: obj,
            errCode: 'INVALID_USERNAME',
            status: false
        })
    }).then((result) => {
        dispatch(updateLoginInfo(result))
    }).catch((err) => {
        dispatch(updateLoginInfo(err))
    })
}

export const acLogout = () => (dispatch, getState) => {

}