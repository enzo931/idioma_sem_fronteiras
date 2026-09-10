const idiomas = {
    espanhol: {
        titulo: "Espanhol",
        flag: "../img/esp.png",
        imagem: "../img/espanhol.jpg",
        textoLeft: `Seja bem-vindo ao nosso Curso de Espanhol, uma experiência imersiva que vai muito além da simples aprendizagem de uma nova língua. Com o espanhol sendo uma das línguas mais faladas do mundo, dominar esse idioma abre portas para novas oportunidades de viagem, trabalho e relacionamentos. Na Idiomas sem Fronteiras, oferecemos um curso completo, estruturado para atender a alunos de todos os níveis, desde iniciantes até aqueles que buscam aprimorar suas habilidades.`,
        textoRight: `Na Idiomas sem fronteiras, nossa missão é transformar seu aprendizado em uma experiência enriquecedora e prazerosa. Ao final do curso, você não apenas falará espanhol com confiança, mas também terá adquirido um conhecimento profundo sobre as culturas que falam essa língua. Inscreva-se agora e dê o primeiro passo em direção a um mundo de novas possibilidades!`
    },
    frances: {
        titulo: "Francês",
        flag: "../img/fra.png",
        imagem: "../img/franca.jpg",
        textoLeft: `Seja bem-vindo ao nosso Curso de Francês, uma jornada fascinante que o levará a um dos idiomas mais românticos e culturais do mundo. O francês não é apenas a língua da arte, da moda e da gastronomia; é também uma porta de entrada para novas oportunidades profissionais e pessoais. Na Idiomas sem fronteiras, oferecemos um curso completo, estruturado para atender a alunos de todos os níveis, desde iniciantes até aqueles que desejam aperfeiçoar suas habilidades.`,
        textoRight: `Na Idiomas sem fronteiras, nossa missão é transformar seu aprendizado em uma experiência enriquecedora e prazerosa. Ao final do curso, você não apenas falará francês com confiança, mas também terá adquirido um conhecimento profundo sobre as culturas que falam essa língua. Inscreva-se agora e dê o primeiro passo em direção a um mundo de novas possibilidades!`
    },
    portugues: {
        titulo: "Português",
        flag: "../img/verde.jpg",
        imagem: "../img/br.jpg",
        textoLeft: `Seja bem-vindo ao nosso Curso de Português do Brasil, uma jornada envolvente que irá conectá-lo com a língua mais falada da América do Sul e com uma rica diversidade cultural. O português é uma língua vibrante, cheia de nuances e expressões que refletem a história e as tradições do Brasil. Na Idiomas sem fronteiras, oferecemos um curso completo, estruturado para atender alunos de todos os níveis, desde iniciantes até aqueles que desejam aperfeiçoar suas habilidades.`,
        textoRight: `Na Idiomas sem fronteiras, nossa missão é transformar seu aprendizado em uma experiência rica e gratificante. Ao final do curso, você não apenas falará português com confiança, mas também terá adquirido um conhecimento profundo sobre as culturas que falam essa língua. Inscreva-se agora e dê o primeiro passo em direção a um mundo de novas possibilidades!`
    },
    ingles: {
        titulo: "Inglês",
        flag: "../img/eua.png",
        imagem: "../img/ingles.jpg",
        textoLeft: `Seja bem-vindo ao nosso Curso de Inglês, uma oportunidade de aprender a língua mais falada do mundo e abrir portas em diversas áreas, como estudos, viagens e carreira profissional. Nosso curso é estruturado para atender desde iniciantes até alunos avançados, com foco em conversação, escrita e compreensão auditiva.`,
        textoRight: `Na Idiomas sem fronteiras, acreditamos que aprender inglês deve ser uma experiência dinâmica e prazerosa. Ao final do curso, você será capaz de se comunicar com confiança em diferentes situações do cotidiano e do ambiente profissional. Inscreva-se agora e descubra um novo mundo de possibilidades!`
    }
};


const urlParams = new URLSearchParams(window.location.search);
const idiomaSelecionado = urlParams.get("idioma");
const idioma = idiomas[idiomaSelecionado] || idiomas.espanhol;


document.getElementById("titulo-navbar").innerText = idioma.titulo;
document.getElementById("titulo-curso").innerText = `Curso de ${idioma.titulo}`;
document.getElementById("texto-left").innerText = idioma.textoLeft;
document.getElementById("texto-right").innerText = idioma.textoRight;
document.getElementById("flag-img").src = idioma.flag;
document.getElementById("main-img").src = idioma.imagem;