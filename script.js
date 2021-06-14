// variaveis
const blackColor = document.getElementById('black');
blackColor.classList.add('selected');
const greenColor = document.getElementById('lightgreen');
const blueColor = document.getElementById('darkblue');
const yellowColor = document.getElementById('yellow');
let selecionado = document.querySelector('.selected');
let cssSelected = window.getComputedStyle(selecionado, null).getPropertyValue('background-color');
const quadro = document.getElementById('pixel-board');
const quadradinho = document.getElementsByClassName('pixel');

// Botoes
const inputVQV = document.createElement('input');
const posicaoInput = document.getElementById('botao');
inputVQV.id = 'board-size';
inputVQV.type = 'number';
inputVQV.min = '1';
inputVQV.placeholder = 'Digite o tamanho do board';
const botaoVQV = document.createElement('button');
botaoVQV.innerHTML = 'VQV';
botaoVQV.id = 'generate-board';
botaoVQV.style.width = '50px';
botaoVQV.style.marginLeft = '10px';
posicaoInput.appendChild(inputVQV);
posicaoInput.appendChild(botaoVQV);
const buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerHTML = 'Limpar';
buttonClear.style.width = '150px';
buttonClear.style.marginLeft = '15px';
posicaoInput.appendChild(buttonClear);

// funcao para selecionar a cor a ser pintada e cores aleatórias
function changeClassSelected() {
  const corVerde1 = Math.ceil(Math.random() * 255);
  const corVerde2 = Math.ceil(Math.random() * 255);
  const corVerde3 = Math.ceil(Math.random() * 255);
  greenColor.style.backgroundColor = `rgb(${corVerde1}, ${corVerde2}, ${corVerde3})`;
  greenColor.addEventListener('click', () => {
    greenColor.classList.add('selected');
    blackColor.classList.remove('selected');
    yellowColor.classList.remove('selected');
    blueColor.classList.remove('selected');
    selecionado = document.querySelector('.selected');
    cssSelected = window.getComputedStyle(selecionado, null).getPropertyValue('background-color');  
  })
  const corAmarelo1 = Math.ceil(Math.random() * 255);
  const corAmarelo2 = Math.ceil(Math.random() * 255);
  const corAmarelo3 = Math.ceil(Math.random() * 255);
  yellowColor.style.backgroundColor = `rgb(${corAmarelo1}, ${corAmarelo2}, ${corAmarelo3})`;
  yellowColor.addEventListener('click', () => {
    yellowColor.classList.add('selected');
    blackColor.classList.remove('selected');
    greenColor.classList.remove('selected');
    blueColor.classList.remove('selected');
    selecionado = document.querySelector('.selected');
    cssSelected = window.getComputedStyle(selecionado, null).getPropertyValue('background-color');
  })
  const corAzul1 = Math.ceil(Math.random() * 255);
  const corAzul2 = Math.ceil(Math.random() * 255);
  const corAzul3 = Math.ceil(Math.random() * 255);
  blueColor.style.backgroundColor = `rgb(${corAzul1}, ${corAzul2}, ${corAzul3})`;
  blueColor.addEventListener('click', () => {
    blueColor.classList.add('selected');
    blackColor.classList.remove('selected');
    yellowColor.classList.remove('selected');
    greenColor.classList.remove('selected');
    selecionado = document.querySelector('.selected');
    cssSelected = window.getComputedStyle(selecionado, null).getPropertyValue('background-color');
  })
  blackColor.addEventListener('click', () => {
    blackColor.classList.add('selected');
    greenColor.classList.remove('selected');
    yellowColor.classList.remove('selected');
    blueColor.classList.remove('selected');
    selecionado = document.querySelector('.selected');
    cssSelected = window.getComputedStyle(selecionado, null).getPropertyValue('background-color');
  })
}

// Funcao para criar o quadro padrao 5x5
function boardPadrao() {
  const valorPadrao = 5*5;
  for (let index = 0; index < valorPadrao; index += 1) {
    const quadrados = document.createElement('div');
    quadrados.classList.add('pixel');
    quadro.appendChild(quadrados);
  }
  quadro.style.width = `${(40 + 5) * 5}px`;
}

// Funçao para mudar a cor do pixel
function changeColor(event) {
  const elemento = event.target;
  const cssBranco = window.getComputedStyle(elemento, null).getPropertyValue('background-color');
  if (cssBranco !== cssSelected) {
    elemento.style.backgroundColor = cssSelected;
  } else {
    elemento.style.backgroundColor = 'white';
  }
  if (elemento === quadro) {
    elemento.style.backgroundColor = 'white';
  }
}

// funcao para limpar o quadro
function clearBoard() {
  buttonClear.addEventListener('click', () => {
    for (let index = 0; index < quadradinho.length; index += 1) {
      quadradinho[index].style.backgroundColor = 'white';
    }
  });
}

// funcao para criar o quadro conforme valor digitado pelo usuario
function createBoard() {
  const posicaoBoard = document.getElementById('pixel-board');
  botaoVQV.addEventListener('click', () => {
    let valorInput = document.getElementById('board-size').value;
    document.getElementById('board-size').value = ' ';
    if (valorInput === '' || valorInput <= 0) {
      return alert('Board inválido!');
    } else if (valorInput <= 5) {
      return alert('Board menor ou igual ao tamanho padrão!');
    } else if (valorInput > 5) {
      quadro.textContent = ' ';
      if (valorInput > 50) {
        valorInput = 50;
      }
    }
    let largura = valorInput;
    valorInput = valorInput*valorInput;
    for (let index = 0; index < valorInput; index += 1) {
      const pixels = document.createElement('div');
      pixels.classList.add('pixel');
      pixels.style.backgroundColor = 'white';
      posicaoBoard.appendChild(pixels);
    }
    largura *= 40;
    quadro.style.width = `${largura}px`;
  });
}

// funcoes e eventos a serem executados
boardPadrao();
changeClassSelected();
quadro.addEventListener('click', changeColor);
clearBoard();
createBoard();
