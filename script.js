const hamburger = document.querySelector('.hamburger');
const modalsSection = document.querySelector('.modals-section');
hamburger.addEventListener('click', () => {
  const menu = document.querySelector('.hamburger-menu');
  const top = document.querySelector('.top');
  const middle = document.querySelector('.middle');
  const bottom = document.querySelector('.bottom');
  menu.classList.toggle('hide');
  top.classList.toggle('active');
  middle.classList.toggle('active');
  bottom.classList.toggle('active');
});

const items = document.querySelector('.hamburger-menu').childNodes;

items.forEach((item) => {
  item.addEventListener('click', () => {
    const menu = document.querySelector('.hamburger-menu');
    const top = document.querySelector('.top');
    const middle = document.querySelector('.middle');
    const bottom = document.querySelector('.bottom');
    menu.classList.toggle('hide');
    top.classList.toggle('active');
    middle.classList.toggle('active');
    bottom.classList.toggle('active');
  });
});

const portfolio = [
  {
    gridPosition: 'grid-item-2',
    cardClass: 'project-div',
    cardImage: 'img/project_1.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },

  {
    gridPosition: 'grid-item-3',
    cardClass: 'project-div',
    cardImage: 'img/project_2.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },

  {
    gridPosition: 'grid-item-4',
    cardClass: 'project-div',
    cardImage: 'img/project_3.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },

  {
    gridPosition: 'grid-item-5',
    cardClass: 'project-div',
    cardImage: 'img/project_4.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },

  {
    gridPosition: 'grid-item-6',
    cardClass: 'project-div',
    cardImage: 'img/project_5.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },

  {
    gridPosition: 'grid-item-7',
    cardClass: 'project-div',
    cardImage: 'img/project_6.jpg',
    cardTitle: 'Project name goes here',
    titleClass: 'poppins',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    tagClasses: ['li-htm', 'li-rub', 'li-jav'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openModal',
  },
];

const portfolioSection = document.querySelector('#portfolio');

Array.from(portfolioSection.children).forEach((child, index) => {
  child.innerHTML = `
  <div class="${portfolio[index].gridPosition}">
  <div class="${portfolio[index].cardClass}">
      <img src="${portfolio[index].cardImage}" alt="" />
      <h2 class="${portfolio[index].titleClass}">${portfolio[index].cardTitle}</h2>
      <ul>
          <li class="${portfolio[index].tagClasses[0]} ${portfolio[index].titleClass}">${portfolio[index].techTags[0]}</li>
          <li class="${portfolio[index].tagClasses[1]} ${portfolio[index].titleClass}">${portfolio[index].techTags[1]}</li>
          <li class="${portfolio[index].tagClasses[2]} ${portfolio[index].titleClass}">${portfolio[index].techTags[2]}</li>
      </ul>
      <button class="${portfolio[index].buttonClass}" id="${index}" type="button"><span>${portfolio[index].button1}</span></button>
  </div>
</div>
  `;
});

const desktopPortfolio = [
  {
    gridPosition: 'grid-2-3',
    cardClass: 'port-entry-1',
    cardTitle: 'Project name goes here',
    techTags: ['HTML', 'Ruby on Rails', 'Javascript'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openDeskModal1',
  },

  {
    gridPosition: 'grid-2-7',
    cardTitle: 'Project name goes...',
    techTags: ['HTML', 'Ruby on Rails', '+1'],
    button1: 'See this project &#x2192;',
    buttonClass: 'openDeskModal2',
  },
];

const deskPort1 = document.querySelector('.portentry1');
deskPort1.innerHTML = `
  <div class="${desktopPortfolio[0].cardClass} ${desktopPortfolio[0].gridPosition}" >                
  <div class="poppins">
      <h1>${desktopPortfolio[0].cardTitle}</h1>
      <ul>
          <li>${desktopPortfolio[0].techTags[0]}</li>
          <li>${desktopPortfolio[0].techTags[1]}</li>
          <li>${desktopPortfolio[0].techTags[2]}</li> 
      </ul>
      <button type="button" class="poppins ${desktopPortfolio[0].buttonClass}">${desktopPortfolio[0].button1}</button>
      <img src="img/pointer.svg" alt="">
  </div>
</div>   
  `;

const deskport2 = document.querySelector('.portentry2');
deskport2.innerHTML = `
  <div class="${desktopPortfolio[1].gridPosition}">
  <div>
      <h1 class="poppins">${desktopPortfolio[1].cardTitle}</h1>
      <ul class="poppins">
          <li>${desktopPortfolio[1].techTags[0]}</li>
          <li>${desktopPortfolio[1].techTags[1]}</li>
          <li>${desktopPortfolio[1].techTags[2]}</li> 
      </ul>
      <button type="button" class="poppins ${desktopPortfolio[1].buttonClass}">${desktopPortfolio[0].button1}</button>
      <img src="img/pointer.svg" alt="">
  </div>
</div>
  `;

const modalPopup = document.querySelectorAll('.openModal');
modalPopup.forEach((element) => {
  element.addEventListener('click', () => {
    const popupWindow = document.createElement('section');
    popupWindow.classList.add('modal-pop');
    popupWindow.innerHTML = `
      <div class="mobile modal ">   
      <img src="img/close.png" alt="" class="modal-quit">
      <h1 class="poppins modal-h1">${portfolio[element.id].cardTitle}</h1>
      <ul class="poppins tech-tags">
          <li class="tech-tag1">${portfolio[element.id].techTags[0]}</li>
          <li class="tech-tag2">${portfolio[element.id].techTags[1]}</li>
          <li class="tech-tag3">${portfolio[element.id].techTags[2]}</li>
      </ul>
      <img src="${portfolio[element.id].cardImage}" alt="" class="mmodal-img">
      <div class="sub-img">
        <img src="${portfolio[element.id].cardImage}" alt="" class="sub-image">
        <img src="${portfolio[element.id].cardImage}" alt="" class="sub-image">
        <img src="${portfolio[element.id].cardImage}" alt="" class="sub-image">
        <img src="${portfolio[element.id].cardImage}" alt="" class="sub-image">
      </div>
      <p class="poppins modal-para para1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
      <p class="poppins modal-para">
        Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <div class="modal-link"><a href="#" class="a-live poppins">See Live <img class="img-live" src="img/Union.png" alt=""></a></div>
      <div class="modal-link"><a href="#" class="a-source poppins">See Source <img class="img-source" src="img/Vector.png" alt=""></a></div>
    
    </div>
      `;
    document.body.appendChild(popupWindow);
    window.addEventListener('click', (e) => (e.target === popupWindow ? popupWindow.classList.add('hide') : false));
    const closePopup = document.querySelectorAll('.modal-quit');
    closePopup.forEach((el) => {
      el.addEventListener('click', () => {
        popupWindow.classList.toggle('hide');
      });
    });
  });
});

function stopScroll(val) {
  if (val) {
    // Disable scroll
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
  } else {
    // Enable scroll
    document.body.style.overflow = 'auto';
  }
}

const deskPop1 = document.querySelectorAll('.openDeskModal1');
deskPop1.forEach((element) => {
  element.addEventListener('click', () => {
    const deskPopWin1 = document.createElement('section');
    deskPopWin1.classList.add('desktop', 'desk-modal');
    deskPopWin1.innerHTML = `
      <div class="modalWrapper">
      <div class="headBar">
          <h1 class="poppins deskH1">${desktopPortfolio[0].cardTitle}</h1>
          <img src="img/close.png" alt="" class="desk-quit1 desk-quit">
      </div>
      <ul class="poppins modtags">
          <li class="modtag">${desktopPortfolio[0].techTags[0]}</li>
          <li class="modtag">${desktopPortfolio[0].techTags[1]}</li>
          <li class="modtag">${desktopPortfolio[0].techTags[2]}</li>
      </ul>
      <img src="img/project_1.jpg" alt="" class="deskModImg">
      <div class="deskSubDiv">
          <img src="img/project_1.jpg" alt="" class="deskSubImg">
          <img src="img/project_1.jpg" alt="" class="deskSubImg">
          <img src="img/project_1.jpg" alt="" class="deskSubImg">
          <img src="img/project_1.jpg" alt="" class="deskSubImg">
      </div>
      <p class="poppins deskpara1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
      <p class="poppins deskpara2">
          Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <div class="deskBtn">
          <div class="desk-btn"><a href="#" class="poppins deskBtn1">See Live <img class="deskLive" src="img/Union.png" alt=""></a></div>
          <div class="desk-btn"><a href="#" class="poppins deskBtn1">See Source <img class="deskLive" src="img/Vector.png" alt=""></a></div> 
      </div>
      <div class="next">
          <span class="poppins next1">&#x2190; Previous Project </span>
          <span class="poppins next1">Next Project &#x2192;</span>
      </div>
      <div class="bkg-color"></div>
  </div>
      `;

    modalsSection.innerHTML = '';
    modalsSection.appendChild(deskPopWin1);
    stopScroll(true);

    window.addEventListener('click', (e) => (e.target === deskPopWin1 ? deskPopWin1.classList.add('hide') : false));
    const closeDeskPop1 = document.querySelectorAll('.desk-quit1');
    closeDeskPop1.forEach((el) => {
      el.addEventListener('click', () => {
        deskPopWin1.classList.toggle('hide');
        stopScroll(false);
      });
    });
  });
});

const deskPop2 = document.querySelectorAll('.openDeskModal2');
deskPop2.forEach((element) => {
  element.addEventListener('click', () => {
    const deskPopWin2 = document.createElement('section');
    deskPopWin2.classList.add('desktop', 'desk-modal');
    deskPopWin2.innerHTML = `
      <div class="modalWrapper">
      <div class="headBar">
          <h1 class="poppins deskH1">${desktopPortfolio[1].cardTitle}</h1>
          <img src="img/close.png" alt="" class="desk-quit2 desk-quit">
      </div>
      <ul class="poppins modtags">
          <li class="modtag">${desktopPortfolio[1].techTags[0]}</li>
          <li class="modtag">${desktopPortfolio[1].techTags[1]}</li>
          <li class="modtag">${desktopPortfolio[0].techTags[2]}</li>
      </ul>
      <img src="img/project_5.jpg" alt="" class="deskModImg">
      <div class="deskSubDiv">
          <img src="img/project_5.jpg" alt="" class="deskSubImg">
          <img src="img/project_5.jpg" alt="" class="deskSubImg">
          <img src="img/project_5.jpg" alt="" class="deskSubImg">
          <img src="img/project_5.jpg" alt="" class="deskSubImg">
      </div>
      <p class="poppins deskpara1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      </p>
      <p class="poppins deskpara2">
          Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <div class="deskBtn">
          <div class="desk-btn"><a href="#" class="poppins deskBtn1">See Live <img class="deskLive" src="img/Union.png" alt=""></a></div>
          <div class="desk-btn"><a href="#" class="poppins deskBtn1">See Source <img class="deskLive" src="img/Vector.png" alt=""></a></div> 
      </div>
      <div class="next">
          <span class="poppins next1">&#x2190; Previous Project </span>
          <span class="poppins next1">Next Project &#x2192;</span>
      </div>
  </div>
      `;

    modalsSection.innerHTML = '';
    modalsSection.appendChild(deskPopWin2);
    stopScroll(true);

    window.addEventListener('click', (e) => (e.target === deskPopWin2 ? deskPopWin2.classList.add('hide') : false));
    const closeDeskPop2 = document.querySelectorAll('.desk-quit2');

    closeDeskPop2.forEach((el) => {
      el.addEventListener('click', () => {
        deskPopWin2.classList.toggle('hide');
        stopScroll(false);
      });
    });
  });
});

const mobileEmail = document.querySelector('#email');
const mobileForm = document.querySelector('.mobileForm');
const mobileError = document.querySelector('.error-msg');

mobileError.style.visibility = 'hidden'

mobileForm.addEventListener('submit', (event) => {
  if(mobileEmail.value !== mobileEmail.value.toLowerCase()){    
    event.preventDefault();
    mobileError.innerHTML = 'Please enter your email in lowercase';
    mobileError.style.visibility = 'visible'
  }
  else{
    mobileError.style.visibility = 'hidden'
  }
})


const deskEmail = document.querySelector('#emailD');
const deskForm = document.querySelector('.deskForm');
const deskError = document.querySelector('.deskError');

deskError.style.visibility = 'hidden'

deskForm.addEventListener('submit', (event) => {
  if(deskEmail.value !== deskEmail.value.toLowerCase()){    
    event.preventDefault();
    deskError.innerHTML = 'Please enter your email in lowercase';
    deskError.style.visibility = 'visible'
  }
  else{
    deskError.style.visibility = 'hidden'
  }
})




