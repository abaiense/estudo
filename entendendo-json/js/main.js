var objs = [
  {
    nome: "Antonio",
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador Front-End",
      empresa: "Freelance",
    },
    hobbies: ["Treinar", "Programar", "Caminhar"],
  },
  {
    nome: "João",
    idade: 56,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Assistir Filmes", "Beber", "Limpar Carro"],
  },
];

console.log("Mostrando um objeto sem tratamento");
console.log(objs);
console.log(typeof objs);
console.log("----------");

//JSON
// Convertendo Objeto para Json

const jsonData = JSON.stringify(objs);

console.log("Mostrando um OBJ convertido para JSON");
console.log(jsonData);
console.log(typeof jsonData);
console.log("----------");

//Convertendo Json para Objeto novamente

console.log("Mostrando um JSON convertido para OBJ");
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});
