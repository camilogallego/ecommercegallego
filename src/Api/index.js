const apiUrl = 'https://fakestoreapi.com'

export default function api(path) {
    return fetch(`${apiUrl}/${path}`)
        .then(res => res.json())
        .then(response => response)

}
