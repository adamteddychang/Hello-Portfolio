// JS for the Modal popups

const openbtn = document.querySelectorAll('[data-open]');
const closebtn = document.querySelectorAll('[data-close]');
const isVisible = 'visible';

for (const btn of openbtn) {
  btn.addEventListener('click', function openModal() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const btn of closebtn) {
  btn.addEventListener('click', function closeModal() {
    const modalId = this.dataset.close;
    document.getElementById(modalId).classList.remove(isVisible);
  });
}

// JS for the data object

const modalTitle = document.querySelector('.modal_title');
const languages1 = document.querySelector('#lang1');
const languages2 = document.querySelector('#lang2');
const languages3 = document.querySelector('#lang3');
const projectImg = document.querySelector('#proj_img');
// change img src, projectImg.src = "newsource.png"
const projectContent = document.querySelector('#proj_content');
const seeLiveBtn = document.querySelector('#see_live')
const seeSrcBtn = document.querySelector('#see_src')


const modal1 = {  
    title :"Multi Post Stories",
    language1: "html",
    language2: "Bootstrap",
    language3: "Ruby on Rails", 
    projectImage: "Images/modal_img.png",
    projectTxt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live:"https://www.google.com",
    source:"https://www.github.com"  
}

const modal2 = {
    title :"Professional Art Printing Data",
    language1: "html",
    language2: "Bootstrap",
    language3: "Ruby on Rails", 
    projectImage: "Images/modal_img.png",
    projectTxt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    live:"https://www.google.com",
    source:"https://www.github.com" 
}

//Data for Modal for first project
 modalTitle.innerHTML = modal1.title
 languages1.innerHTML = modal1.language1
 languages2.innerHTML = modal1.language2
 languages3.innerHTML = modal1.language3
 projectImg.src = modal1.projectImage
 projectContent.innerHTML = modal1.projectTxt
 seeLiveBtn.href = modal1.live
 seeSrcBtn.href = modal1.source

 //Data for Modal for second project
 modalTitle.innerHTML = modal2.title
 languages1.innerHTML = modal2.language1
 languages2.innerHTML = modal2.language2
 languages3.innerHTML = modal2.language3
 projectImg.src = modal2.projectImage
 projectContent.innerHTML = modal2.projectTxt
 seeLiveBtn.href = modal2.live
 seeSrcBtn.href = modal2.source


 const cardTitle = document.querySelector('.bk-img-title')
 const cardP = document.querySelector('.bk-img-p')

