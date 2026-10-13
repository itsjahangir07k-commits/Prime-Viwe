const movies = [
  {title:"PRINCE (2025)", category:"new", poster:"https://via.placeholder.com/300x450?text=PRINCE"},
  {title:"TOOFAN", category:"trending", poster:"https://via.placeholder.com/300x450?text=TOOFAN"},
  {title:"RAJMAHAL", category:"new", poster:"https://via.placeholder.com/300x450?text=RAJMAHAL"}
];
function load(filter='all'){
  let html='';
  movies.forEach(m=>{
    if(filter=='all' || m.category==filter){
      html+=`<div><img src="${m.poster}"><p>${m.title}</p></div>`;
    }
  });
  document.getElementById('movieList').innerHTML=html;
}
function filterMovie(c){load(c);}
load();
