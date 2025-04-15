const classSobre = document.querySelector('.sobre');
const elemInformaçoes = document.querySelector('.informaçoes');
const elemBotaoInformaçoes = document.querySelector('.botaoInformaçoes');

// Criando classe
// document.querySelector('.sobre').style.color = 'yellow';
// classSobre.classList.toggle("amarelo");

// Alterando classe
// function alterarClasse(){
//     // alert('Você clicou no botão!');

//     classSobre.classList.toggle('amarelo');
//     classSobre.classList.toggle('vermelho');
// }

// Eventos
// classSobre.addEventListener('click', alterarClasse);

// Adcionar evento de clique no botão do rodapé
elemBotaoInformaçoes.addEventListener('click', function(){
    elemInformaçoes.classList.toggle('visivel')

    // console.log(elemInformaçoes.classList.contains('visivel'))

    if (elemInformaçoes.classList.contains('visivel')) {
        elemBotaoInformaçoes.textContent = 'Ocultar Informações';
    } else {   
        elemBotaoInformaçoes.textContent = 'Exibir Informações';     
    }
})
