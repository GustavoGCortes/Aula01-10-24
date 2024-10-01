let i=1, media=0, r=0, aluno, nota
let = alunos=[]
let = notas=[]

while(i<=5){
    aluno = prompt("Digite o nome do aluno")
    alunos.push(aluno)
    nota = parseFloat(prompt("Digite a nota do aluno"))
    notas.push(nota)
    i++
    media=media+nota
}
media=media/5
while(r<=4){
    if(notas[r]<= media){
        console.log(alunos[r])
    }
    r++
}