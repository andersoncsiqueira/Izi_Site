AOS.init({ delay: 1000, // values from 0 to 3000, with step 50ms
    duration: 1400, 

})

// script.js
let currentIndex = 0;
const photos = document.querySelectorAll('.photo');

function showPhoto(index) {
  // Remove a classe 'active' de todas as fotos
  photos.forEach(photo => photo.classList.remove('active'));
  // Adiciona a classe 'active' para a foto atual
  photos[index].classList.add('active');
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length; // Avança para a próxima foto
  showPhoto(currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length; // Volta para a foto anterior
  showPhoto(currentIndex);
}

// Inicializa a galeria mostrando a primeira foto
showPhoto(currentIndex);