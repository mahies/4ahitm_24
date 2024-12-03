function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  var menuIcon = document.querySelector(".menu-icon");
  menuIcon.clas sList.toggle("open");


  var backgroundText = document.getElementById("backgroundText");
  backgroundText.style.display = sidebar.classList.contains("open") ? "none" : "block";
}

document.addEventListener("click", function(event) {
  var sidebar = document.getElementById("sidebar");
  var menuIcon = document.querySelector(".menu-icon");

  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target) && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    menuIcon.classList.remove("open");


    var backgroundText = document.getElementById("backgroundText");
    backgroundText.style.display = "block";
  }
});

function updateDisplay() {
  var input = document.querySelector('.search-bar').value;
  var displayContainer = document.querySelector('body');


  var previousTexts = document.querySelectorAll('.display');
  previousTexts.forEach(text => text.remove());


  for (let i = 0; i < 77; i++) {
    var textElement = document.createElement('div');
    textElement.className = 'display';
    textElement.innerText = input;


    var size = Math.floor(Math.random() * 50) + 50; // Random size between 50px and 100px
    textElement.style.fontSize = size + 'px';


    var startPosition = getRandomPosition();
    textElement.style.top = startPosition.top;
    textElement.style.left = startPosition.left;


    var rotation = Math.random() * 360; // Random rotation between 0 and 360 degrees
    textElement.style.transform += ` rotate(${rotation}deg)`;


    displayContainer.appendChild(textElement);
  }
}

function getRandomPosition() {
  var x = Math.random() * 80 + 10;
  var y = Math.random() * 80 + 10;
  return { top: y + '%', left: x + '%' };
}



const title = document.querySelector('.title');

title.addEventListener('mousemove', (event) => {
  const rect = title.getBoundingClientRect();
  const x = event.clientX - rect.left;


  title.classList.remove('spin-left', 'spin-right', 'hover-center');


  if (x < rect.width / 3) {
    title.classList.add('spin-left');
  } else if (x > rect.width * 2 / 3) {
    title.classList.add('spin-right');
  } else {
    title.classList.add('hover-center');
  }
});

title.addEventListener('mouseleave', () => {

  title.classList.remove('spin-left', 'spin-right', 'hover-center');
});



const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { left, top, width, height } = card.getBoundingClientRect();

  const x = (clientX - left) / width - 0.5;
  const y = (clientY - top) / height - 0.5;
  const tiltX = y * 80;
  const tiltY = -x * 80;

  card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

const button = document.getElementById('liquid-button');
const cardRect = card.getBoundingClientRect();

card.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  if (clientX < cardRect.right && clientX > cardRect.left && clientY < cardRect.bottom && clientY > cardRect.top) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

button.addEventListener('click', () => {
  button.style.transform = 'translateY(-50px)';
  setTimeout(() => {
    button.style.transform = 'translateY(0)';
  }, 400);
});

