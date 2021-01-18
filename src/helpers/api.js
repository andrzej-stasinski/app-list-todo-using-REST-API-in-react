const serverUrl = 'http://localhost:3004/transactions'

const toDoItemApiUrl = id =>
    id ? `${serverUrl}/${id}` : `${serverUrl}`

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
    get(toDoItemApiUrl())

export const create = params => 
    post(toDoItemApiUrl(), {...params})

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
    destroyed(toDoItemApiUrl(id))

export const put = (url, body) => 
    new Promise((resolve, reject) => apiCall(url, 'PUT', body, resolve, reject))

export const update = (id, params) => 
    put(toDoItemApiUrl(id), {...params})


