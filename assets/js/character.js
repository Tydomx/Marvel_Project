// // grabbing hero name and fetching api
// function fetching() {
//     var publicKey = '70157e5fd5990a919a767f142118c129';
//     //var privateKey = 'a870e660c3542ab98ce9804ea98660bca3647692';
//     var ts = 1;
//     var hash = hashing(ts, publicKey, privateKey);
//     var charId = "1009368";
//    //var url = `https://gateway.marvel.com/v1/public/characters${charId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
//    var url = `https://gateway.marvel.com/v1/public/characters${charId}&apikey=${privateKey}`; 
//    fetch(url).then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);
//     });
// }

// fetching();

// function hashing(ts, publicKey, privateKey) {
//     var hash = CryptoJS.MD5(ts + privateKey + publicKey).toString()
//     return hash;
// }


// giphy function API
function getHeroGif() {
    let gifUrl = 'RnIvb4HLPtrRcGkX1YVlWzJBPzPoGknC';
    document.addEventListener("", init);
    function init() {
        document.getElementById("btn").addEventListener("click", function event(){
            event.preventDefault(); // stopping page from reloading
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
            let str = document.getElementById("submit").value.trim();
            url = url.concat(url);
            console.log(url);
        })
    }
    fetch(gifUrl)
}
