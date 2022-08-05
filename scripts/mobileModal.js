// project object, keys here  must match keys in the html file
let projects = [
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
const originalModal = document.querySelector(".modal").innerHTML;

// called when a button is clicked, go through the modal contents and replace
// all string templates eg {{title}} with the expected value from projects array
function changeModalContent(project) {
  resetModal();
  const modal = document.querySelector(".modal");
  let modalContents = document.querySelector(".modal").innerHTML;

  //   loops through the key value pairs of the project object
  for (const [key, value] of Object.entries(project)) {
    //   string substitution happens here
    modalContents = modalContents.replace(key, value);
  }

  //   update the content of the page with the substitute values
  document.querySelector(".modal").innerHTML = modalContents;
  modal.classList.toggle("hide");
  restoreEvents()
}

function resetModal() {
  // reset modal to original state
  document.querySelector(".modal").innerHTML = originalModal;
}

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((projectButton) => {
  // set event listener for every project button
  projectButton.addEventListener("click", () =>
    changeModalContent(projects[projectButton.dataset.projectid])
  );
});

function restoreEvents() {
  let quit = document.querySelector(".modal-quit");
  quit.addEventListener("click", () => {
    let modalMenu = document.querySelector(".modal-pop");
    modalMenu.classList.toggle("hide");
  });
}
