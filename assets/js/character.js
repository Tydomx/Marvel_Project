const charId = localStorage.getItem('charSelected');

function fetching() {
    var publicKey = '35fad408979368e76379f831cba43f4d';
    var privateKey = '5d96d5ad0d54441e8920c0c482bc142e3efd0013';
    var ts = 1;
    var hash = hashing(ts, publicKey, privateKey);
    var url = `http://gateway.marvel.com/v1/public/characters/${charId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data.data.results[0].name)
        document.getElementById('name').textContent = data.data.results[0].name
      document.getElementById('description').textContent = data.data.results[0].description;
    })
}

function hashing(ts, publicKey, privateKey) {
    var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()
    return hash;
}

fetching();
hashing();

