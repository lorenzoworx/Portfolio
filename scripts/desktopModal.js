// project object, keys here  must match keys in the html file
let desktopProjects = [
  {
    "{{mainImg}}": "img/project_1.jpg",
    "{{subImg1}}": "img/project_1.jpg",
    "{{subImg2}}": "img/project_1.jpg",
    "{{subImg3}}": "img/project_1.jpg",
    "{{subImg4}}": "img/project_1.jpg",
  },
  {
    "{{mainImg}}": "img/project_2.jpg",
    "{{subImg1}}": "img/project_2.jpg",
    "{{subImg2}}": "img/project_2.jpg",
    "{{subImg3}}": "img/project_2.jpg",
    "{{subImg4}}": "img/project_2.jpg",
  },
  {
    "{{mainImg}}": "img/project_3.jpg",
    "{{subImg1}}": "img/project_3.jpg",
    "{{subImg2}}": "img/project_3.jpg",
    "{{subImg3}}": "img/project_3.jpg",
    "{{subImg4}}": "img/project_3.jpg",
  },
  {
    "{{mainImg}}": "img/project_4.jpg",
    "{{subImg1}}": "img/project_4.jpg",
    "{{subImg2}}": "img/project_4.jpg",
    "{{subImg3}}": "img/project_4.jpg",
    "{{subImg4}}": "img/project_4.jpg",
  },
  {
    "{{mainImg}}": "img/project_5.jpg",
    "{{subImg1}}": "img/project_5.jpg",
    "{{subImg2}}": "img/project_5.jpg",
    "{{subImg3}}": "img/project_5.jpg",
    "{{subImg4}}": "img/project_5.jpg",
  },
  {
    "{{mainImg}}": "img/project_6.jpg",
    "{{subImg1}}": "img/project_6.jpg",
    "{{subImg2}}": "img/project_6.jpg",
    "{{subImg3}}": "img/project_6.jpg",
    "{{subImg4}}": "img/project_6.jpg",
  },
];

// store the initial state of the page on load
const originalDesktopModal = document.querySelector(".desk-modal").innerHTML;

// called when a button is clicked, go through the modal contents and replace
// all string templates eg {{title}} with the expected value from projects array
function changeDModalContent(project, hide = true) {
  resetDModal();
  const deskModal = document.querySelector(".desk-modal");
  let deskModalContents = document.querySelector(".desk-modal").innerHTML;
  //   loops through the key value pairs of the project object
  for (const [key, value] of Object.entries(project)) {
    //   string substitution happens here
    deskModalContents = deskModalContents.replace(key, value);
  }

  //   update the content of the page with the substitute values
  document.querySelector(".desk-modal").innerHTML = deskModalContents;
  if (hide) {
    deskModal.classList.toggle("hide");
  }
  restoreDEvents();
}

function resetDModal() {
  // reset modal to original state
  document.querySelector(".desk-modal").innerHTML = originalDesktopModal;
}

const desktopProjectButtons = document.querySelectorAll(".desktop-project-btn");

desktopProjectButtons.forEach((projectButton) => {
  // set event listener for every project button
  projectButton.addEventListener("click", () => {
    changeDModalContent(desktopProjects[projectButton.dataset.projectid]);
  });
});

let currentPosition = 0;

function restoreDEvents() {
  let quit1 = document.querySelector(".desk-quit");
  quit1.addEventListener("click", () => {
    let modalMenu = document.querySelector(".desk-modal");
    modalMenu.classList.toggle("hide");
  });

  // Navigation
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");

  nextButton.addEventListener("click", () => {
    changeDModalContent(
      desktopProjects[
        nextElement()
      ],
      false
    );
  });

  prevButton.addEventListener("click", () => {
    changeDModalContent(
      desktopProjects[nextElement()],
      false
    );
  });
}

function nextElement() {
  let val = currentPosition++ % desktopProjects.length;
  console.log(val);

  return val;
  
}

function prevElement() {
  let val = currentPosition++ % desktopProjects.length;
  console.log(val);

  return val;
  
}