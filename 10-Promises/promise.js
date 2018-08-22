const request = require('https')

const postsPromise = new Promise((resolve, reject) => {
    request.get('https://wesbos.com/wp-json/wp/v2/posts', (response) => {
        let data = '';

        response.on('data', chunk => {
            data += chunk
        })

        response.on('end', () => {
            resolve(data)
        })

        response.on('error', error => {
            reject(error)
        })
    })
})

postsPromise
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log('error: ', err)
    })
