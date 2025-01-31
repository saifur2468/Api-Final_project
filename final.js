// button load function start 
function buttonload(){
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
  .then(res => res.json())
  .then(data => buttondisplay(data.categories))
}

// catagorey button anujay button data load 
// function catagoeryButton () {
// fetch('https://openapi.programming-hero.com/api/peddy/category/')
//   .then(res => res.json())
//   .then(data => loaddisplay(data.pets))
// }

function buttondisplay(categories){
  console.log(categories)
  const showbutton = document.getElementById('Button-load')

  categories.forEach((item) => {
      console.log(item)
      const newloadbutton = document.createElement('div')
     
      newloadbutton.innerHTML =`
 <button onclick="loaddisplay('${item.id}')">
      ${item.category}
       </button>
     `
      showbutton.appendChild(newloadbutton)
  });

}
buttonload()





// All Data Load Function load 

function Displayall(){
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
  .then(res => res.json())
  .then(data =>loaddisplay(data.pets) )

}
function loaddisplay(pets){


  const cardcontainer = document.getElementById('cards')
  cardcontainer.innerHTML ="";
 pets.forEach((pets) => {
  console.log(pets)
   const card = document.createElement('div');
      card.classList="card card-compact";
      card.innerHTML = `
<div class="card card-compact bg-base-100 w-96 shadow-xl">
<figure>
  <img
    src="${pets.image}"
    alt="Shoes" />
</figure>
<div class="card-body">
  <h2 class="card-title">${pets.category}</h2>
  <h2>Id:${pets.breed}</h2>
  <h3>Date of Birth:${pets.date_of_birth}</h3>
  <h3>Price:${pets.price}</h3>
  <h3>Gender:${pets.gender}</h3>
  <h2>Statues:${pets.vaccinated_status}</h2>
  <h3>Name:${pets.pet_name}</h3>
   <div class="card-actions">
    <button onclick="showmodal('${pets}')" class="btn btn-primary">Show Modal</button>

    <button onclick="showModal()"class="btn btn-success">Adopt</button>
    <button id="like-btn" class="btn btn-outline btn-accent" ><i class="fa-solid fa-thumbs-up"></i></button>
  </div>
</div>
</div>
`

cardcontainer.appendChild(card);
  });

}
Displayall()




  



// Modal function start  section 
const showmodal = async(pets) => {
  console.log(pets)
  const url ='https://openapi.programming-hero.com/api/peddy/pets'
  const res = await fetch(url)
  
const data = await res.json();

displaymodal(data.pets[0])
}


const  displaymodal =(pets) =>{
  console.log(pets)

  const modalinformation = document.getElementById('modal-content');
  modalinformation.innerHTML =`
  <img class="mx-auto" src="${pets.image}" />
    <p class="text-2xl font-serif text-red-500">${pets.category}</p>
    <h1>${pets.gender}</h1>
    <h1>${pets.price}</h1>
    <h1>${pets.pet_name}</h1>
    <p class="text-xl font-serif my-2">${pets.pet_details}</p>
`;
document.getElementById('modal-data').showModal();
}

// Adopts modal function start 

function showModal(){
  const information = document.getElementById('Adopted-data')
  const contenect = document.getElementById('Adopted-content')

  contenect.innerHTML=`
<h1 class="text-2xl font-serif text-center text-red-500">Adopts Count Second Function</h1>

   <div class="hero">
     
                <span id="second" class="text-4xl font-serif text-green-500">00</span>
            </div>
        </div>
    </div>
    `
  // Adopts Countdown function
        
    let second = document.getElementById("second");
setInterval(() => {
        let currentTime = new Date();
second.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    }, 1000);
    // Time complete Close the modal
    setTimeout(() => {
      information.close(); 
    }, 3000);

  information.showModal();
}












