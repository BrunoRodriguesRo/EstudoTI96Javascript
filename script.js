var t_fieldNome=document.querySelector("#nome")
console.log(t_fieldNome)

var t_fieldNascimento=document.querySelector("#nascimento")
console.log(t_fieldNascimento)

var t_fieldAltura=document.querySelector("#altura")
console.log(t_fieldAltura)

var t_fieldPeso=document.querySelector("#peso")
console.log(t_fieldPeso)

 var btnCalcular=document.querySelector("#calcular")

 function somar(n1,n2){

    return n1+n2;
}

btnCalcular.addEventListener("click", function somar(e){

    console.log(`Nome: ${t_fieldNome.value} peso:${t_fieldPeso.value} Altura: ${t_fieldAltura.value} nascimento: ${t_fieldNascimento.value}`)

})

