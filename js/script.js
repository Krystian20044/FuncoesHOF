    let funcionarios = [{id:"ABC",nome:"Frodo", salario:1500},
        {id:"DEF",nome:"Aragorn", salario:3200},
        {id:"GHI",nome:"Gandalf",salario:7000},
        {id:"JKL", nome:"Legolas",salario:5800}
    ]

        let reajuste = funcionarios.map(
            (funcionario) =>{
                 return funcionario.salario * 1.05
            })
        
            console.log(reajuste)



        let alunos = [
            {id:"01", nome:"Chaves", nota:4.9},
            {id:"02", nome:"Chiquinho", nota:7.0},
            {id:"03", nome:"Quico", nota:10.0},
            {id:"04", nome:"Inhonho", nota:6.5},
            {id:"05", nome:"Pops", nota:8.1}
        ]

        let aprovados = alunos.filter(
            (elemento) => {
                return elemento.nota >= 7.0
            }
        )

        console.log (aprovados)

        let clientes = [
            {id:1, nome:"Jon", sobrenome:"Snow"},
            {id:2, nome:"Tyrion", sobrenome:"Lannister"},
            {id:3, nome:"Daenerys", sobrenome:"Targaryen"},
            {id:4, nome:"Sansa", sobrenome:"Stark"}
        ]

        let retorne = clientes.map(
            (cliente) =>{
                return cliente.nome + cliente.sobrenome
            }
        )

        console.log(retorne)

        let notas = [7.5,8.1,4.0,5.3,10.0,9.7]

        let soma = notas.reduce(
            (acumulador,elemento)=> {
                return acumulador += elemento
            }
        )

        let media = soma/notas.length

        console.log (soma,media)

        let bruxos = [
            {id:1, nome:"Harry Potter", notas:[8.1,7.4,9.9]},
            {id:1, nome:"Hermione Granger", notas:[10.0,7.4,9.9]}
        ]