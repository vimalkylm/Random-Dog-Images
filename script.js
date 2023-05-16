const btnGetImage = document.getElementById('btn-get-image');
const dogImage = document.getElementById('dog-image');

function getRandomDogImage() {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            const imageUrl = response.data.message;
            dogImage.innerHTML = `<img src="${imageUrl}" alt="Random Dog Image">`;
        })
        .catch(error => {
            console.log(error);
        });
}

btnGetImage.addEventListener('click', getRandomDogImage);