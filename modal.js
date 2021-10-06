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

// JS for the data object modal skeleton

const modalTitle = document.querySelector('.modal_title');
const languages1 = document.querySelector('#lang1');
const languages2 = document.querySelector('#lang2');
const languages3 = document.querySelector('#lang3');
const projectImg = document.querySelector('#proj_img');
// change img src, projectImg.src = "newsource.png"
const projectContent = document.querySelector('#proj_content');
const seeLiveBtn = document.querySelector('#see_live');
const seeSrcBtn = document.querySelector('#see_src');

const modal1 = {
  title: 'Multi Post Stories',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby on Rails',
  projectImage: 'Images/modal_img.png',
  projectTxt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};

const modal2 = {
  title: 'Professional Art Printing Data 1',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const modal3 = {
  title: 'Professional Art Printing Data 2',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const modal4 = {
  title: 'Professional Art Printing Data 3',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const modal5 = {
  title: 'Professional Art Printing Data 4',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const modal6 = {
  title: 'Professional Art Printing Data 5',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const modal7 = {
  title: 'Professional Art Printing Data 6',
  language1: 'html',
  language2: 'Bootstrap',
  language3: 'Ruby ',
  projectImage: 'Images/modal_img.png',
  projectTxt: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};
const projArr = [modal1, modal2, modal3, modal4, modal5, modal6, modal7];

// Data for Modal for project
function loadDataIntoModal(data) {
  modalTitle.innerHTML = data.title;
  languages1.innerHTML = data.language1;
  languages2.innerHTML = data.language2;
  languages3.innerHTML = data.language3;
  projectImg.src = data.projectImage;
  projectContent.innerHTML = data.projectTxt;
  seeLiveBtn.href = data.live;
  seeSrcBtn.href = data.source;
}

document.getElementById('st-see-btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[0]);
});

document.querySelector('#proj_2_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[1]);
});
document.querySelector('#proj_3_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[2]);
});
document.querySelector('#proj_4_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[3]);
});
document.querySelector('#proj_5_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[4]);
});
document.querySelector('#proj_6_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[5]);
});
document.querySelector('#proj_7_btn').addEventListener('click', () => {
  loadDataIntoModal(projArr[6]);
});
