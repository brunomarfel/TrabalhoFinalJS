//Bem-vinda!

//Trabalho Final EWEB Bruno França

//MISSAO 1 - FORMULARIO, CARDS E LISTA

//FORMULARIO
        
//     document.getElementById("formulario-contato").addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     let nome = document.getElementById('nome').value;
//     let email = document.getElementById('email').value;
    
//     if (nome == '' || email == '') {
//         alert('Por favor, preencha todos os campos obrigatórios.');
//     } else {
//         alert("Formulário enviado com sucesso!");
//     }
// }); 


//CARDS

let cards = document.getElementById('cursos').querySelectorAll('.card'); //selecionar

cards.forEach(card => { //forEach: percorrer cada um
    card.style.width = '250px'; //tamanho fixo
    card.style.height = '400px'; //tamanho fixo
   
    let img = card.querySelector('img'); //selecionar
    if (img) { //verificar e ajustar
        img.style.width = '100%'; //tamanho fixo
        img.style.height = '40%'; //tamanho fixo
    }

    card.addEventListener('mouseover', () => { //evento aumentar
        card.style.transform = 'scale(1.1)'; 
    });

    card.addEventListener('mouseout', () => { //evento voltar ao normal
        card.style.transform = 'scale(1.0)'; 
    });
});

//LISTA

let list = document.getElementById('sobre').querySelector('ul'); //selecionar

let item5 = document.createElement('li'); //criar item
item5.textContent = 'Comunicação Digital'; //denominaçao

list.appendChild(item5); //adicionar item

let item6 = document.createElement('li'); //criar item
item6.textContent = 'Formação Formadores'; //denominaçao

list.appendChild(item6); //adicionar item


//MISSAO 2 - BOTAO VOLTAR AO TOP 

let button = document.createElement('button'); //criar
button.textContent = 'Voltar ao Topo'; //texto do botão
document.body.appendChild(button); //adicionar

//estilos
button.style.position = 'fixed'; 
button.style.bottom = '20px';
button.style.right = '20px';
button.style.display = 'none'; //ocultar no inicio

window.onscroll = () => button.style.display = window.scrollY > 200 ? 'block' : 'none'; //exibir no scroll

button.onclick = function() { //funçao voltar ao topo
    window.scrollTo(0, 0);
}


//MISSAO 3 - FORMULARIO TURBINADO

    document.getElementById("formulario-contato").addEventListener("submit", function(event) { //adiconar evento
    event.preventDefault(); 

    let nome = document.getElementById("nome"); //pegar os dados do formularios
    let email = document.getElementById("email");
    let contato = document.getElementById("contatoFormulario");
    let regiao = document.getElementById("regiao");
    let mensagem = document.getElementById("mensagem");

    let temErro = false; //

    //validaçoes
    if (nome.value.trim().length < 1) { //trim: apagar espaços em brancos
        alert("Campo Obrigatório: Nome.");
        temErro = true;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) { //includes: caso exista os símbolos indicados
        alert("Campo Obrigatório: Inserir email válido.");
        temErro = true;
    }

    if (contato.value.length < 9 || isNaN(contato.value)) { //IsNaN: verificar se é número ou não
        alert("Campo Obrigatório: Inserir Contato Válido");
        temErro = true;
    }

    if (regiao.value == "") {
        alert("Campo Obrigatório: Selecionar uma Escola");
        temErro = true;
    }

    if (mensagem.value.trim().length < 1) { //trim: apagar espaços em brancos
        alert("Campo Obrigatório: Inserir uma Mensagem");
        temErro = true;
    }

    if (!temErro) {
        alert("Dados submetidos com sucesso.");
        this.submit();
    }
});


//MISSAO 4 - DESAFIOS EXTRAS

//LORDE DO CARROSEL

let carrosselImagens = [ 
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/269562519/original/6a385a175ddbec3906a4710dd2e35befc7081f8b/provide-turn-key-software-development-services.png",
    "https://static.vecteezy.com/system/resources/thumbnails/045/782/238/small_2x/a-woman-in-glasses-smiles-at-a-computer-monitor-in-a-room-photo.jpg",
    "https://www.cesaedigital.pt/wp-content/uploads/2023/04/logo-1024x578.png"
]; //array dde imagens do próprio HTML/Cards

let imagemAtual = 0; 

let img = document.createElement("img"); //criar elemento img
img.src = carrosselImagens[imagemAtual]; //atribuir
img.style.width = "100%"; //tamanho
document.getElementById("sobre").appendChild(img); //adicinar


function changeImage() { //mudar imagem
    imagemAtual = (imagemAtual + 1) % carrosselImagens.length; //
    img.src = carrosselImagens[imagemAtual]; //atualizar imagem
}

setInterval(changeImage, 3000); //contar e mudar 3s


//IMPERADOR DAS APIS

let mapaContainer = document.createElement('div'); // criar div para o mapa
mapaContainer.id = 'mapa';
mapaContainer.style.cssText = 'width: 50%; height: 300px; margin: 20px auto; border-radius: 8px;'; //personalizando

// Selecionar o footer
let rodape = document.querySelector('footer'); //selecionar footer
rodape.appendChild(mapaContainer); //adicionar

let scriptMaps = document.createElement('script'); // API Google Maps
scriptMaps.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDT_QU3GEduXSGHxXX_KrbnBv7yNCnw2qI&callback=initMapa';
scriptMaps.async = true;
document.body.appendChild(scriptMaps);

window.initMapa = function() { // inicializar mapa
  let localizacaoCesae = { lat: 41.15843505032034, lng: -8.650307264711172 };
  let mapa = new google.maps.Map(mapaContainer, {
    center: localizacaoCesae,
    zoom: 20,
    mapId: '4504f8b37365c3d0',
  });
};

//Tentar Iframe + incorporar link como alternativa.


//OUTROS

let navbar = document.querySelector('.navbar'); //chamar elemento
navbar.classList.remove('navbar-light', 'bg-light'); //remover cor atual
navbar.style.backgroundColor = '#4D6376'; //adicionar cor nova

// Altera a cor do texto para branco em toda a navbar
navbar.style.color = 'white';

// Altera a cor do texto dos links (que ficam em cinza padrão)
let navbarLinks = navbar.querySelectorAll('.nav-link');
navbarLinks.forEach(link => {
    link.style.color = 'white';
});

// Altera a cor da marca 'Cesae Digital' para branco
let navbarBrand = navbar.querySelector('.navbar-brand');
if (navbarBrand) {
    navbarBrand.style.color = 'white';
}


//Adicionar Bordas

let sections = ['sobre', 'cursos', 'contato']; //variável e array de seções

sections.forEach(function(id) {  //forEach: percorrer cada item
    let section = document.getElementById(id); //selecionar 
    
    if (section) { //verificar e ajustar
        section.style.border = "2px solid #4D6376"; //adicionar borda
    }
});


//Centralizar Titulos

let sectionsII = ['sobre', 'cursos', 'contato']; //variável e array de seções

sectionsII.forEach(function(id) { //forEach: percorrer cada item
    centralizarTitulos(id); //chama a função para centralizar o título
});

function centralizarTitulos(id) { 
    let titulo = document.getElementById(id).querySelector('h2'); //selecionar 
    
    if (titulo) { //verificar e ajustar
        titulo.style.textAlign = 'center'; //centralizar o título
    }
}













