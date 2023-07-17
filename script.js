
var idade = prompt ('Digite a idade do paciente: ')

if (idade <= 15 && idade >= 0) {
    document.write('O paciente é uma criança, com a idade de: ' + idade + ' anos.')
} else if (idade >= 15 && idade < 30){
    document.write('O paciente é um jovem, com a idade de: ' + idade + ' anos.')
} else if (idade >= 30 && idade < 60) {
    document.write('O paciente é um adulto, com a idade de: ' + idade + ' anos.')
} else if (idade < 0) {
    document.write('A idade digitada (' + idade + ') é inválida.')
} else {
    document.write('O paciente é um idoso, com a idade de: ' + idade + ' anos.')
}