console.log('%c HI', 'color: firebrick')
let html = '';
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function getImages() {

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => {
            return resp.json();
        })
        .then(img => {

            img['message'].forEach(element => {
                html += `
                  <div> <img src='${element}'></div>
                   `; //finish html


                console.log(element);

                document.querySelector('#dog-image-container').innerHTML = html;

            });
        })





}
function getBreeds() {

    fetch(breedUrl)
        .then(resp => resp.json())
        .then(obj => {
            const newBreeds = Object.keys(obj.message);
            createItem(newBreeds);


        })


}

function createItem(newBreeds) {
    let html = '';

    newBreeds.forEach(element => {
        html += `
     <li class='items'>${element}</li>
     `;


    })
    document.querySelector('ul#dog-breeds').innerHTML = html;
   
    let items = document.querySelectorAll('.items');

    for (const li of items) {
        li.addEventListener('click', changeColor)
    }

    
}

function changeColor(item){
    item.target.style.color = 'red';
}



function filterDogs(e){
    
    const items = document.querySelectorAll('.items');
    for (const li of items) {
        if(li.textContent[0] === e.target.value){
            li.style.display = 'block'
        } else {
            li.style.display = 'none'
        }
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
    getImages();
    getBreeds();
    const dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", filterDogs)
})

