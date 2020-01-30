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
   
    let items = document.querySelector('.items');

    items.forEach(element => {
        
        element.addEventListener('click' ,function(e){
            e.target.style.color = 'red';
        });
    })
}

function filterBreeds(){
    const dropdown = document.getElementById("breed-dropdown");
    var letter = dropdown.options[dropdown.selectedIndex].value;
};
document.addEventListener('DOMContentLoaded', function() {
    getImages();
    getBreeds();

    
})

