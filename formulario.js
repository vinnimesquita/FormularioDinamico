function mostrarOnLoad() {
    
var regioes = document.getElementById("regiao");

var opt0 = document.createElement("option");
opt0.value = "0";
opt0.text = "";
regioes.add(opt0, regioes.options[0]);

var opt1 = document.createElement("option");
opt1.value = "1";
opt1.text = "Centro-Oeste";
regioes.add(opt1, regioes.options[1]);

var opt2 = document.createElement("option");
opt2.value = "2";
opt2.text = "Sudeste";
regioes.add(opt2, regioes.options[2]);

var opt3 = document.createElement("option");
opt3.value = "3";
opt3.text = "Sul";
regioes.add(opt3, regioes.options[3]);
}

function mostrarOnChange() {
    var regioes = document.getElementById("regiao");

    if (regioes.value == 1) {
        var estado = document.getElementById("estado");
        while(estado.length){
            estado.remove(0);
        }
    var opt4 = document.createElement("option");
    opt4.value = "0";
    opt4.text = "Distrito Federal";
    estado.add(opt4, estado.options[0]);

    var opt5 = document.createElement("option");
    opt5.value = "1";
    opt5.text = "Goiás";
    estado.add(opt5, estado.options[1]);

    var opt6 = document.createElement("option");
    opt6.value = "2";
    opt6.text = " Mato Grosso ";
    estado.add(opt6, estado.options[2]);

    var opt7 = document.createElement("option");
    opt7.value = "3";
    opt7.text = " Mato Grosso do Sul ";
    estado.add(opt7, estado.options[3]);

    }

 if (regioes.value == 2){
    var estado = document.getElementById("estado");
    while(estado.length){
        estado.remove(0);
    }
    var opt8 = document.createElement("option");
    opt8.value = "5";
    opt8.text = "Espírito Santo";
    estado.add(opt8, estado.options[0]);

    var opt9 = document.createElement("option");
    opt9.value = "6";
    opt9.text = "Minas Gerais";
    estado.add(opt9, estado.options[1]);

    var opt9 = document.createElement("option");
    opt9.value = "7";
    opt9.text = " Rio de Janeiro  ";
    estado.add(opt9, estado.options[2]);

    var opt10 = document.createElement("option");
    opt10.value = "8";
    opt10.text = " São Paulo ";
    estado.add(opt10, estado.options[3]);
}
 if (regioes.value == 3){
    var estado = document.getElementById("estado");
    while(estado.length){
        estado.remove(0);
    }
    var opt11 = document.createElement("option");
    opt11.value = "9";
    opt11.text = "Paraná";
    estado.add(opt11, estado.options[0]);


    var opt12 = document.createElement("option");
    opt12.value = "10";
    opt12.text = "Rio Grande do Sul ";
    estado.add(opt12, estado.options[1]);

    var opt13 = document.createElement("option");
    opt13.value = "11";
    opt13.text = "  Santa Catarina ";
    estado.add(opt13, estado.options[2]);
}
}
function mudarPeriodo(){
   
    var per = dados.periodo;
    
    
    if(per.value == 5){
        var rr = document.querySelector('form[name="dados"]');

        var x = document.createElement('input');
        x.setAttribute('type', 'text');
        x.setAttribute('name', 'periodo');
        x.setAttribute('id', 'period');
        rr.appendChild(x);
       
        }
        else{
             document.getElementById("period").remove(0);
        }
        }
 function validar(){
    var reg = document.getElementById("regiao");
    var est = document.getElementById("estado");
    var periodo = dados.periodo;
    var inp = document.getElementById("period");
     
    var campos = [];
    
    if (reg.value == 0) {
   
    campos.push('Região');
}

   if (est.value == '') {
    
    campos.push('Estado');  
}

   if (periodo.value == ''  ) {
    
    campos.push('Periodo');
    
}

   if (campos.length > 0  ) {
    
    alert('Preencha o(s) campo(s): ' + campos.join(', ') + '!');
    }

else {
    alert('Dados enviados com sucesso');

 }
}
    

    



    
    
    
 

