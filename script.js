/* Variáveis */
const validLogin = 'tryber@teste.com';
const validPassword = '123456';

/* Elementos Login */
const login = document.querySelector('#input-login');
const password = document.querySelector('#input-password');

/* Elementos Forms */
const form = document.querySelector('#evaluation-form');
const name = document.querySelector('#input-name');
const surname = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subjects = document.querySelectorAll('.subject');
const rating = document.querySelectorAll('.rate');
const comment = document.querySelector('#textarea');
const agree = document.querySelector('#agreement');

/* Counter */
const inputTextArea = document.getElementById('textarea');
const remainingChars = document.getElementById('counter');

/* Botões */
const loginBtn = document.querySelector('#login-btn');
const submitBtn = document.querySelector('#submit-btn');

/* Função para autenticar login */
function authLogin() {
  if (login.value !== validLogin || password.value !== validPassword) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
loginBtn.addEventListener('click', authLogin);

/* Função para habilitar envio de formulário */
function enableSubmit() {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agree.addEventListener('change', enableSubmit);

/* Event listener no input para executar a função de count */
inputTextArea.addEventListener('input', () => {
  const remaining = 500 - inputTextArea.value.length;
  const color = remaining < 500 * 0.1 ? 'red' : null;

  remainingChars.textContent = `${remaining} characters remaining`;
  remainingChars.style.color = color;
});

/* Retorna a família selecionada (string) */
function familyChecked() {
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked) {
      return family[i].value;
    }
  }
}

/* Retorna os conteúdos selecionados (string) */
function subjectsChecked() {
  let subjectList = '';
  for (let i = 0; i < subjects.length; i += 1) {
    if (subjects[i].checked) {
      subjectList += `${subjects[i].value}, `;
    }
  }
  return subjectList;
}

/* Retorna a avaliação selecionada (int) */
function rateChecked() {
  for (let i = 0; i < rating.length; i += 1) {
    if (rating[i].checked) {
      return rating[i].value;
    }
  }
}

function formSubmit() {
  form.innerHTML = '';
  form.style.backgroundImage = 'none';
  form.innerHTML += '<h2 style="margin-bottom:20px;">Resultados</h2>';
  form.innerHTML += `<p>Nome: ${name.value} ${surname.value}</p>`;
  form.innerHTML += `<p>Email: ${email.value}</p>`;
  form.innerHTML += `<p>Casa: ${house.value}</p>`;
  form.innerHTML += `<p>Família: ${familyChecked()}</p>`;
  form.innerHTML += `<p>Matérias: ${subjectsChecked()}</p>`;
  form.innerHTML += `<p>Avaliação: ${rateChecked()}</p>`;
  form.innerHTML += `<p>Observações: ${comment.value}</p>`;
}
submitBtn.addEventListener('click', formSubmit);
