const funcionarios = [
    {
        nome: "Jose",
        email: "jose@gmail.com",
        departamento: "Financeiro",
        salario: 1200,
        tempoEmpresa: 2,
    },

    {
        nome: "João",
        email: "joao@gmail.com",
        departamento: "TI",
        salario: 1200,
        tempoEmpresa: 2,
    },
    {
        nome: "Andre",
        email: "andre@gmail.com",
        departamento: "Infra",
        salario: 1200,
        tempoEmpresa: 8,
    },
];

function aumentaSalario(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i].departamento === "Financeiro"){
            arr[i].salario = arr[i].salario + 500
        }
    }
    return funcionarios
}

aumentaSalario(funcionarios)
console.log(funcionarios)