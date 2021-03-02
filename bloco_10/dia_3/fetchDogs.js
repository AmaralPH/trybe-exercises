const APIurl = 'https://dog.ceo/api/breeds/image/random';

function fetchDog() {
    return fetch(APIurl).then((response) => {
        response
            .json()
            .then((json) => {
                response.ok ? Promise.resolve(json) : Promise.reject(json);
            })
    });
}

module.exports = { fetchDog };