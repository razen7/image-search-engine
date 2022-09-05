const apiKey = 'api_key=MKQqPEjJ3pJHMihOmc6BSH1lbHlR4qfQ';
let url = () => `https://api.pexels.com/v1/search?query=`;


const imgContainer = document.querySelector('.images-container');
const loadingDiv = `
        <div class="loading-container">
            <div class="loading">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>`;

const button = document.getElementById('search-button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    let keyWord = document.getElementById('search-text').value;
    // console.log(keyWord);
    imgContainer.innerHTML = loadingDiv;
    fetch(url() + keyWord, {
        headers: {
            'Authorization': '563492ad6f91700001000001f600d4b0691a48db9dc1fb4924dc754d',
        }
    })
        .then(response => response.json())
        .then(obj => obj.photos)
        .then(data => {
            // console.log(data[0].src.original);
            imgContainer.innerHTML = '';
            data.forEach(obj => {
                let img = document.createElement('img');
                img.src = obj.src.original;
                imgContainer.append(img);
            });

        })
})


