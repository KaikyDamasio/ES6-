const alunos = [
    { nome:"Ana" , nota:5},
    { nome:"João", nota:7},
    { nome:"Pedro", nota:6},
    { nome:"Marcio", nota:2},
    { nome:"José", nota:7},
    { nome:"Joaquin", nota:9},
]

const alunosAprovados = alunos.filter(function(item){
    return item.nota >=6; 
})

console.log(alunosAprovados);