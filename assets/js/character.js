// function for fetching the Marvel API
const charId = localStorage.getItem('charSelected');

function fetching() {
    var publicKey = '35fad408979368e76379f831cba43f4d';
    var privateKey = '5d96d5ad0d54441e8920c0c482bc142e3efd0013';
    var ts = 1;
    var hash = hashing(ts, publicKey, privateKey);
    var url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&name=${charId}`;
    fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log (data)
        const charPath = data.data.results[0].thumbnail.path 
        const charImg = (charPath + "/portrait_incredible.jpg")
        document.getElementById('name').textContent = data.data.results[0].name
      document.getElementById('description').textContent = data.data.results[0].description;
      document.getElementById("charImg").src = charImg; 
      document.getElementById("marvelcredit").textContent = "Made with Love by Marvel Fans (Abel, Yuliia, Michael) " +data.attributionText;
    })
}

function hashing(ts, publicKey, privateKey) {
    var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()
    return hash;
}

// function for fetching the GIPHY API 

let APIKEY = 'RnIvb4HLPtrRcGkX1YVlWzJBPzPoGknC';
document.addEventListener("DOMContentLoaded", init);

function init() {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=${charId}`;

        fetch(url)
            .then(response => response.json())
            .then(content => {
                // data, pagination, meta
                const charGif = content.data[0].images.downsized.url;

                document.getElementById("charGif").src = charGif;
            })
            .catch(function (err) {
                console.error(err);
            })};

fetching();
hashing();
