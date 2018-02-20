import fetch from 'isomorphic-fetch';

let url = 'mock.json';
export default load => (url) = {
	fetch(url)
	.then(response => response.data())
	.then(data => console.log(data))
}