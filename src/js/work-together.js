import {postRequests} from "./api.js";

const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const formEl = document.getElementById("footer-form");
const emailEl = document.getElementById("footer-form-input");
const commentEl = document.getElementById("footer-form-textarea");

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    email: emailEl.value,
    comment: commentEl.value,
  };
// checking email
  if (regex.test(data.email) === false) {
    console.log("email error");
    return;
  }
// checking comment
  if (data.comment.trim().length < 1) {
    console.log(data.comment.trim());
    console.log("comment error");
    return;
  }
  // send data
  try {
    await postRequests(data);
    alert("send data is success");
    formEl.reset();
  } catch (error) {
    console.log(error);
  }
};

formEl.addEventListener("submit", handleSubmit);