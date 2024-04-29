import {postRequestsApi} from './api.js';

const REGEX = /^\w+(.\w+)?@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/;

const validateEmail = (regex, email) => {
  return regex.test(email);
};

const formEl = document.getElementById('footer-form');
const emailEl = document.getElementById('footer-form-input');
const commentEl = document.getElementById('footer-form-textarea');
const emailMesEl = document.querySelector('.email-message');
const commentMesEl = document.querySelector('.comment-message');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.footer-modal-btn-close');

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

const handleMailCheck = (e) => {
  const email = e.target.value;

  if (validateEmail(REGEX, email) !== false) {
    emailMesEl.textContent = 'Success!';
    emailMesEl.classList.remove('isErrorMessage');
    emailMesEl.classList.add('isSuccessMessage');
  } else if (email.length > 0) {
    emailMesEl.textContent = 'Invalid email, try again';
    emailMesEl.classList.remove('isSuccessMessage');
    emailMesEl.classList.add('isErrorMessage');
  }
};

const handleCommentCheck = (e) => {
  const comment = e.target.value;

  if (comment.trim().length > 1) {
    commentMesEl.textContent = 'Success!';
    commentMesEl.classList.remove('isErrorMessage');
    commentMesEl.classList.add('isSuccessMessage');
  } else {
    commentMesEl.textContent = 'Please, write some text';
    commentMesEl.classList.remove('isSuccessMessage');
    commentMesEl.classList.add('isErrorMessage');
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    email: emailEl.value,
    comment: commentEl.value,
  };
  // checking email
  if (validateEmail(REGEX, data.email) === false) return;

  // checking comment
  if (data.comment.trim().length < 1) return;

  // send data
  try {
    const result = await postRequestsApi(data);
    formEl.reset();
    handleOpenModal(result);
  } catch (error) {
    handleOpenModal({
      title: 'Error',
      message: error.message,
    });
  }

  emailMesEl.textContent = '';
  commentMesEl.textContent = '';
  emailMesEl.classList.remove('isSuccessMessage', 'isErrorMessage');
  commentMesEl.classList.remove('isSuccessMessage', 'isErrorMessage');
};

emailEl.addEventListener('blur', handleMailCheck);

commentEl.addEventListener('blur', handleCommentCheck);

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
