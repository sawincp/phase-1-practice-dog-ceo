const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImg(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => data.message.forEach(data => renderImg(data)))
}

function getBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => Object.keys(data.message).forEach(data => renderBreeds(data)))
    
}

function renderImg(data){
    let img = document.createElement('img')
    img.className = 'images'
    img.src =`${data}`
    document.getElementById('dog-image-container').appendChild(img)
}

function renderBreeds(data){
    let li = document.createElement('li')
    li.innerHTML = `${data}`
    document.getElementById('dog-breeds').appendChild(li)
    
}


function intialize(){
    getImg()
    getBreeds()
}
intialize()
