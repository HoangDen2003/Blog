const dialogAdd = document.getElementById("add-dialog");
const dialogEdit = document.getElementById("edit-dialog");
const dialogDelete = document.getElementById("delete-dialog");

const btnCloseAdd = document.querySelector("#add-dialog .dialog-btn");
const btnCloseEdit = document.querySelector("#edit-dialog .dialog-btn");

const btnCancelAdd = document.querySelector("#add-dialog .btn_cancel");
const btnCancelEdit = document.querySelector("#edit-dialog .btn_cancel");
const btnCancelDelete = document.querySelector("#delete-dialog .btn_cancel");

const btnSaveAdd = document.querySelector("#add-dialog .btn_ok");
const btnSaveEdit = document.querySelector("#edit-dialog .btn_ok");
const btnSaveDelete = document.querySelector("#delete-dialog .btn_ok");

const addBtn = document.querySelector(".content .page-header .add-item");
const content = document.querySelector(".content");
const tableList = document.querySelector(".content .page-list");
const tableHeader = document.querySelector(".content .page-header");
const table = document.querySelector(
  ".layout-container .layout-page .content-wrapper .content .page-list table tbody"
);
const input = document.querySelector("#edit-dialog #edit");

// user
const inputUserName = document.querySelector("#edit-dialog input#username");
const inputEmail = document.querySelector("#edit-dialog input#email");
const inputRole = document.querySelector("#edit-dialog select");
const inputPassword = document.querySelector("#edit-dialog input#password");
const inputRePassword = document.querySelector("#edit-dialog input#RePassword");

// language
const inputLanguage = document.querySelector("#edit-dialog input#language");

// check cate
let isHiddenAddCate = false;
let isHiddenEditCate = false;
let isHiddenDeleteCate = false;

// check user
let isHiddenAddUser = false;
let isHiddenEditUser = false;
let isHiddenDeleteUser = false;

// ! category
addBtn.addEventListener("click", function () {
  if (isHiddenAddCate === false || isHiddenAddUser === false) {
    dialogAdd.style.display = "block";
    content.style.opacity = "0.4";
    isHiddenAddCate = true;
    isHiddenAddUser = true;
  } else {
    dialogAdd.style.display = "none";
    content.style.opacity = "1";
    isHiddenAddCate = false;
    isHiddenAddUser = false;
  }
});

btnCloseAdd.addEventListener("click", function () {
  if (isHiddenAddCate === true || isHiddenAddUser === true) {
    dialogAdd.style.display = "none";
    content.style.opacity = "1";
    isHiddenAddCate = false;
    isHiddenAddUser = false;
  }
});

btnCloseEdit.addEventListener("click", function () {
  if (isHiddenEditCate === true || isHiddenEditUser === true) {
    dialogEdit.style.display = "none";
    content.style.opacity = "1";
    isHiddenEditUser = false;
    isHiddenEditCate = false;
  }
});

// cancel
btnCancelDelete.addEventListener("click", function () {
  if (isHiddenDeleteCate === true || isHiddenDeleteUser === true) {
    dialogDelete.style.display = "none";
    content.style.opacity = "1";
    isHiddenDeleteCate = false;
    isHiddenDeleteUser = false;
  }
});

btnCancelAdd.addEventListener("click", function () {
  if (isHiddenAddCate === true || isHiddenAddUser === true) {
    dialogAdd.style.display = "none";
    content.style.opacity = "1";
    isHiddenAddCate = false;
    isHiddenAddUser = false;
  }
});

btnCancelEdit.addEventListener("click", function () {
  if (isHiddenEditCate === true || isHiddenEditUser === true) {
    dialogEdit.style.display = "none";
    content.style.opacity = "1";
    isHiddenEditCate = false;
    isHiddenEditUser = false;
  }
});

// ! category
if (input != null) {
  table.addEventListener("click", function (e) {
    const category = e.target.closest("tr");
    if (e.target.closest(".text-primary")) {
      console.log(category.children[2].textContent);
      if (isHiddenEditCate === false || isHiddenEditUser === false) {
        dialogEdit.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenEditCate = true;
        isHiddenEditUser = true;
        if (input !== null) {
          input.value = category.children[2].textContent;
        } else {
          input.value = "";
        }
      } else {
        dialogEdit.style.display = "none";
        content.style.opacity = "1";
        isHiddenEditCate = false;
        isHiddenEditUser = false;
      }
    } else if (e.target.closest(".text-danger")) {
      if (isHiddenDeleteCate === false || isHiddenDeleteUser === false) {
        dialogDelete.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenDeleteCate = true;
        isHiddenDeleteUser = true;
      } else {
        dialogDelete.style.display = "none";
        content.style.opacity = "1";
        isHiddenDeleteCate = false;
        isHiddenDeleteUser = false;
      }
    }
  });
}

// ! user
if (inputUserName != null) {
  table.addEventListener("click", function (e) {
    const category = e.target.closest("tr");
    if (e.target.closest(".text-primary")) {
      console.log(category.children[2].textContent);
      if (isHiddenEditUser === false || isHiddenEditCate == false) {
        dialogEdit.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenEditUser = true;
        isHiddenEditCate = true;
        inputUserName.value = category.children[1].textContent;
        inputPassword.value = category.children[2].textContent;
        inputRePassword.value = category.children[2].textContent;
        inputEmail.value = category.children[3].textContent;
        inputRole.value = category.children[4].textContent;
      } else {
        dialogEdit.style.display = "none";
        content.style.opacity = "1";
        isHiddenEditUser = false;
        isHiddenEditCate = false;
      }
    } else if (e.target.closest(".text-danger")) {
      console.log(category.children[1].textContent);
      if (isHiddenDeleteUser === false || isHiddenDeleteCate === false) {
        dialogDelete.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenDeleteUser = true;
        isHiddenDeleteCate = true;
      } else {
        dialogDelete.style.display = "none";
        content.style.opacity = "1";
        isHiddenDeleteUser = false;
        isHiddenDeleteCate = false;
      }
    }
  });
}

// ! language
if (inputLanguage != null) {
  table.addEventListener("click", function (e) {
    const category = e.target.closest("tr");
    if (e.target.closest(".text-primary")) {
      console.log(category.children[2].textContent);
      if (isHiddenEditCate === false || isHiddenEditUser === false) {
        dialogEdit.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenEditCate = true;
        isHiddenEditUser = true;
        inputLanguage.value = category.children[2].textContent;
      } else {
        dialogEdit.style.display = "none";
        content.style.opacity = "1";
        isHiddenEditCate = false;
        isHiddenEditUser = false;
      }
    } else if (e.target.closest(".text-danger")) {
      console.log(category.children[2].textContent);
      if (isHiddenDeleteCate === false || isHiddenDeleteUser === false) {
        dialogDelete.style.display = "block";
        content.style.opacity = "0.4";
        isHiddenDeleteCate = true;
        isHiddenDeleteUser = true;
      } else {
        dialogDelete.style.display = "none";
        content.style.opacity = "1";
        isHiddenDeleteCate = false;
        isHiddenDeleteUser = false;
      }
    }
  });
}
