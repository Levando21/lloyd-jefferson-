import {postRequests} from './api.js';
import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css'

const REGEX = /^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;

const formEl = document.getElementById('footer-form');
const emailEl = document.getElementById('footer-form-input');
const commentEl = document.getElementById('footer-form-textarea');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.modal-btn-close');

const handleOpenModal = data => {
  modal.classList.add('show-modal');
  const [title] = modal.getElementsByTagName('h2');
  const [text] = modal.getElementsByTagName('p');

  title.textContent = data.title;
  text.textContent = data.message;
};

const handleCloseModal = () => {
  modal.classList.remove('show-modal');
};

const handleSubmit = async e => {
  e.preventDefault();

  const data = {
    email: emailEl.value,
    comment: commentEl.value,
  };
  // checking email
  if (REGEX.test(data.email) === false) {
    iziToast.error({
      message: 'email is not allowed to be empty',
      position: 'bottomRight',
    });
    return;
  }
  // checking comment
  if (data.comment.trim().length < 1) {
    iziToast.error({
      message: 'comment is not allowed to be empty',
      position: 'bottomRight',
    });
    return;
  }
  // send data
  try {
    const result = await postRequests(data);
    formEl.reset();
    handleOpenModal(result);
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'bottomRight',
    })
  }
};

formEl.addEventListener('submit', handleSubmit);

closeButton.addEventListener('click', () => {
  handleCloseModal();
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    handleCloseModal();
  }
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    handleCloseModal();
  }
});
