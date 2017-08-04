export const LOAD_DATA = 'LOAD_DATA';

// normal action
const updateLoginInfo = (result) => {
    return {
        type: LOAD_DATA,
        result
    }
}
// async action
const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';
export const fetchPostsSuccess = () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(jsonResp => {
                const data = jsonResp.items
                if (data != null) {
                    return resolve({
                        data: data,
                        status: true
                    })
                }
                return reject({
                    errCode: 'LOADING:ERR',
                    status: false,
                    data: []
                })
            });

    }).then((result) => {
        dispatch(updateLoginInfo(result))
    }).catch((err) => {
        dispatch(updateLoginInfo(err))
    })
}

export const acLoadData = () => (dispatch, getState) => {
    const data = fetch(url)
        .then(response => response.json())
        .then(jsonResp => jsonResp.items);
    return new Promise((resolve, reject) => {
        if (data != null) {
            return resolve({
                data: data,
                status: true
            })
        }
        return reject({
            errCode: 'INVALID_USERNAME',
            status: false
        })
    }).then((result) => {
        dispatch(updateLoginInfo(result))
    }).catch((err) => {
        dispatch(updateLoginInfo(err))
    })
}