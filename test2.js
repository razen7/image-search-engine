const apiKey = 'api_key=MKQqPEjJ3pJHMihOmc6BSH1lbHlR4qfQ';
const gifUrl = `https://api.giphy.com/v1/gifs/trending?${apiKey}&s=`

let keyWord = 'happy';

fetch(gifUrl + keyWord)
    .then(response => response.json())
    .then(obj => obj.data)
    .then(arrOfObjs => {
        arrOfObjs.forEach(obj => {
            console.log(obj.images.downsized.url);
        });
    })