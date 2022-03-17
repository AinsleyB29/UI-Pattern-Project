function openNav() {
  document.getElementById('mySidenav').style.width = '300px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}
let bobCharacters;
fetch(
  'https://bobsburgers-api.herokuapp.com/characters/[1,7,26,8,13,3,20,11,39,63,18,10,21,207]'
)
  .then((response) => response.json())
  .then((data) => {
    bobCharacters = data;
  });

document.querySelectorAll('.character').forEach((person) => {
  person.addEventListener('click', (e) => {
    let name = e.target.textContent;
    let src = bobCharacters.find((obj) => obj.name.replaceAll('"', '') == name);
    src = src.image;
    document.querySelector('#mainImg').src = src;
  });
});
