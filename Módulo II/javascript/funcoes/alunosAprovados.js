const alunos = [
{
    nome : 'João',
    nota : 9,
    turma: '1B',
},
{
    nome : 'José',
    nota : 5,
    turma: '2B',
},
{
    nome : 'Maria',
    nota : 6,
    turma: '3B',
},
{
    nome : 'Miguel',
    nota : 3,
    turma: '3B',
},
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
       const {nota, nome} = arr[i];
    
       if (arr[i].nota >= media) {
        aprovados.push(arr[i].nome);
       }
    }

    return aprovados;

}
    console.log(alunosAprovados(alunos, 8));