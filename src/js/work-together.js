import validator from 'validator';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {postRequestsApi} from './api.js';

iziToast.settings({
  position: 'bottomRight',
})

const formEl = document.getElementById('footer-form');
const emailEl = document.getElementById('footer-form-input');
const commentEl = document.getElementById('footer-form-textarea');
const emailMesEl = document.querySelector('.email-message');
const commentMesEl = document.querySelector('.comment-message');
const resBtnEl = document.querySelector('.footer-form-res');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.footer-modal-btn-close');

const toggleStylesValidateEmail = (email) => {
  if (validator.isEmail(email) !== false) {
    emailMesEl.textContent = 'Success!';
    emailMesEl.classList.remove('isErrorMessage');
    emailMesEl.classList.add('isSuccessMessage');
  } else {
    emailMesEl.textContent = 'Invalid email, try again';
    emailMesEl.classList.remove('isSuccessMessage');
    emailMesEl.classList.add('isErrorMessage');
  }
}

const toggleStylesValidateComment = (comment) => {
  if (comment.trim().length > 0) {
    commentMesEl.textContent = 'Success!';
    commentMesEl.classList.remove('isErrorMessage');
    commentMesEl.classList.add('isSuccessMessage');
  } else {
    commentMesEl.textContent = 'Please, write some text';
    commentMesEl.classList.remove('isSuccessMessage');
    commentMesEl.classList.add('isErrorMessage');
  }
}

const resetStylesValidate = () => {
  emailMesEl.textContent = '';
  commentMesEl.textContent = '';
  emailMesEl.classList.remove('isSuccessMessage', 'isErrorMessage');
  commentMesEl.classList.remove('isSuccessMessage', 'isErrorMessage');
}

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

  toggleStylesValidateEmail(email)

  resBtnEl.style.display = 'block'
};

const handleCommentCheck = (e) => {
  const comment = e.target.value;

  toggleStylesValidateComment(comment)

  resBtnEl.style.display = 'block'
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = {
    email: emailEl.value,
    comment: commentEl.value,
  };

  if (validator.isEmail(data.email) === false) {
    iziToast.error({
      title: data.email.length < 1 ? 'Please, write your email' : 'Not validate email',
    });

    toggleStylesValidateEmail(data.email)
    return;
  }

  if (data.comment.trim().length < 1) {
    iziToast.error({
      title: 'Write some text',
    });

    toggleStylesValidateComment(data.comment)
    return;
  }

  try {
    const result = await postRequestsApi(data);

    handleOpenModal(result);
  } catch (error) {
    handleOpenModal({
      title: 'Error',
      message: error.message,
    });
  }

  formEl.reset();
  resBtnEl.style.display = 'none'
  resetStylesValidate()
};

const handleClickResetForm = () => {
  resBtnEl.style.display = 'none'

  emailEl.value = ''
  commentEl.value = ''

  resetStylesValidate()
}

emailEl.addEventListener('input', handleMailCheck);

commentEl.addEventListener('input', handleCommentCheck);

formEl.addEventListener('submit', handleSubmit);

resBtnEl.addEventListener('click', handleClickResetForm)

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
