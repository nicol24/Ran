let personaje 
let h1 = document.getElementById("caracter");
let imagen = document.getElementById("imagen    ");

const get_data = (ld) =>{
    fetch("https //rickandmortyapi.com/api/character/?page-"+id)
    .then((data)=>data.json())
    .then(d => {
        personaje = d;
        print();
    })
    .catch((err)=>console.log(err));
};

const print = () => {
    h1.innerHTML = "";
    image.src = $(personaje.image);
    h1.innerHTML= $ (personaje.name);
};

get_data(3);