// const { data } = require("remark");

const data = [
  {
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy te",
    imageSrc: "images/PortoflioCard/firstdeskpic.png",
    closeImg:"images/Icons/Vector.svg",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: " https://christelle-12.github.io/My-portfolio/",
    sourceLink: "https://github.com/Christelle-12/My-portfolio"
  },
  {
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy te",
    imageSrc: "images/PortoflioCard/firstdeskpic.png",
    closeImg:"images/Icons/Vector.svg",
    technologies: ["HTML", "CSS", "React"],
    liveLink: " https://christelle-12.github.io/My-portfolio/",
    sourceLink: "https://github.com/Christelle-12/My-portfolio"
  },
  {
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy te",
    imageSrc: "images/PortoflioCard/firstdeskpic.png",
    closeImg:"images/Icons/Vector.svg",
    technologies: ["HTML", "CSS", "Java"],
    liveLink: " https://christelle-12.github.io/My-portfolio/",
    sourceLink: "https://github.com/Christelle-12/My-portfolio"
  },
  { 
    name: "Tonic",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy te",
    imageSrc: "images/PortoflioCard/firstdeskpic.png",
    closeImg:"images/Icons/Vector.svg",
    technologies: ["HTML", "CSS", "Github"],
    liveLink: " https://christelle-12.github.io/My-portfolio/",
    sourceLink: "https://github.com/Christelle-12/My-portfolio"
  }
];
const popupSection = document.createElement('div');
popupSection.className ='popup-container';
let content = '';
data.forEach((item) => {
  content = `
  <div class="popup-details-container">
    <span class="popup-name-image">
      <h1 class="popup-name">${item.name}</h1>
      <img src=${item.closeImg} class="popup-image"> 
    </span>
    <ul class="popup-unorded-list">
    ${item.technologies.map((itemList) => `<li class="popup-list">${itemList}</li>`).join('')}
    </ul>
    <span class="desktop-diff">
      <img src=${item.featureImg} class="popup-feature-img">
      <div class="left-side">
        <p class="popup-description">${item.description}</p>
        <span class="popup-button">
          <button class="button popup-button-1">
            <a href=${item.liveLink}>See Project</a>
            <img src="./images/see live.svg">
          </button>
          <button class="button popup-button-1">
            <a href=${item.sourceLink}>See Source</a>
            <img src="./images/Frame22.svg">
          </button>
        </span>
      </div>
    </span>
    
  </div> 
  `;
});
const seeProject = document.querySelectorAll('.project-container');
popupSection.innerHTML = content;
function closePopup() {
  document.body.removeChild(popupSection);
  document.body.style.overflow = 'scroll';
}
function createPopup() {
  document.body.appendChild(popupSection);
  document.body.style.overflow = 'hidden';
  const closeProject = document.querySelector('.popup-image');
  closeProject.addEventListener('click', closePopup);
}
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', createPopup);
}
