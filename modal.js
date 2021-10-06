// create the variables

// Links for modal buttons

const source = 'https://github.com/adamteddychang/Hello-Portfolio';
const live = 'https://adamteddychang.github.io/Hello-Portfolio/';

const projectsarr = [
  {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: live,
    sourcelink: source,
  },
  {
    title: 'Professional Art',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby '],
    livelink: live,
    sourcelink: source,
  },
  {
    title: 'Data Dashboard',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: live,
    sourcelink: source,
  },
  {
    title: 'Website portfolio',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: live,
    sourcelink: source,
  },
  {
    title: 'Website portfolio',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: live,
    sourcelink: source,
  },
  {
    title: 'Website portfolio',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    mainimage: 'Images/modalimg.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    livelink: live,
    sourcelink: source,
  },

];

const proj0 = {
  title: 'Multi Post Stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  mainimage: 'Images/modalimg.png',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  livelink: live,
  sourcelink: source,
};

for (let i = 0; i < projectsarr.length; i += 1) {
  const index = i;
  const project = projectsarr[i];
  let technologieslang = '';
  for (let j = 0; j < project.technologies.length; j += 1) {
    const tech = project.technologies[j];

    technologieslang += `<li class="lang-li_2">${tech}</li>`;
  }
  document.querySelector('#other-proj-contain').innerHTML
  += ` 
  <div class="bk-img-proj">
      <h2 class="bk-img-title">${project.title}</h2>
      <p class="bk-img-p">${project.description}</p>
      <ul class="lang-contain_2">
        ${technologieslang}
       </ul>
      <button onclick='projectdetails(${index})' class="st-see-btn_2" type="button">See Project</button>
  </div>
  `;
}

function projectdetails(index) {
  const dataobj = projectsarr[index];
  const popuptitletext = document.querySelector('#popuptitle');
  const popupimg = document.querySelector('.popimg');
  const popupdescription = document.querySelector('.popupdescription');

  const livebutton = document.getElementById('livebtn');
  const sourcebutton = document.getElementById('srcbtn');

  popuptitletext.innerHTML = dataobj.title;

  popupdescription.innerHTML = dataobj.description;
  popupimg.src = dataobj.mainimage;
  livebutton.href = dataobj.livelink;
  sourcebutton.href = dataobj.sourcelink;

  document.querySelector('#modal').style.display = 'block';
  document.querySelector('#blur').classList.add('is-blurred');
}
function closepopup() {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('#blur').classList.remove('is-blurred');
}

function project0pop() {
  const dataobj = proj0;
  const popuptitletext = document.querySelector('#popuptitle');
  const popupimg = document.querySelector('.popimg');
  const popupdescription = document.querySelector('.popupdescription');

  const livebutton = document.getElementById('livebtn');
  const sourcebutton = document.getElementById('srcbtn');

  popuptitletext.innerHTML = dataobj.title;

  popupdescription.innerHTML = dataobj.description;
  popupimg.src = dataobj.mainimage;
  livebutton.href = dataobj.livelink;
  sourcebutton.href = dataobj.sourcelink;

  document.querySelector('#modal').style.display = 'block';
  document.querySelector('#blur').classList.add('is-blurred');
}

document.querySelectorAll('.st-see-btn_2').onclick = projectdetails();
document.querySelectorAll('.closebtn').onclick = closepopup();
document.querySelector('#st-see-btn').onclick = project0pop();
