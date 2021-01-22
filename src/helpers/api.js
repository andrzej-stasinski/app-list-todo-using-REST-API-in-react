const URL = process.env.REACT_APP_REST_API

export const REST_API_URL = id =>
    id ? `${URL}/${id}` : `${URL}`

export const get = url => 
    new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
    })

export const apiCall = (url, method, body, resolve, reject) => 
    fetch(url, {
        method: method,
        headers: {
          'Content-type': 'application/json',
        },         
        body: JSON.stringify(body)
    }).then(res => {
        if(res.ok) {
            res.json().then(data => resolve(data))
        } else {
            reject(res)
        }
    }) 
export const post = (url, body) => 
    new Promise(
        (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
    )

export const getAll = () =>
    get(REST_API_URL())

export const getOne = id => 
    get(REST_API_URL(id))

export const create = params => 
    post(REST_API_URL(), {...params})

export const destroyed = url => 
    new Promise(
        (resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                  'Content-type': 'application/json',
                },
            }).then(res => {
                if(res.ok) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })    
        }
    )

export const destroy = id => 
    destroyed(REST_API_URL(id))

export const put = (url, body) => 
    new Promise((resolve, reject) => apiCall(url, 'PUT', body, resolve, reject))

export const update = (id, params) => 
    put(REST_API_URL(id), {...params})


