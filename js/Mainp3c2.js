function calcularEnganche(){
    enganche = document.getElementById('txtValor').value*0.30;
    document.getElementById('txtEnganche').value = enganche;
}

function calcularFinanciar(){
    var total;
    auto = document.getElementById('txtValor').value;
    enganche = document.getElementById('txtEnganche').value;

    planes = document.getElementById('cmbPlanes').value;
    planes = parseFloat(planes);
    
    total = (auto - enganche) * planes;
    total = total + (auto - enganche);
    document.getElementById('txtFinanciar').value = total;
    console.log(total);
}

function calcularMensualidad(){
    var meses;
    total = document.getElementById('txtFinanciar').value;
    planes = document.getElementById('cmbPlanes').value;

    if(planes=='0.125'){
        meses = 12;
    }else if(planes=='0.172'){
        meses = 18;
    }else if(planes=='0.21'){
        meses = 24;
    }else if(planes=='0.26'){
        meses = 36;
    }else if(planes=='0.45'){
        meses = 48;
    }

    total = total / meses;
    document.getElementById('txtPago').value = total;
    console.log(total);
}

function limpiarParrafo(){

    valor = document.getElementById('txtValor').value = ""; 
    enganche = document.getElementById('txtEnganche').value = ""; 
    totFinanciar = document.getElementById('txtFinanciar').value = ""; 
    planes = document.getElementById('cmbPlanes').value = ""; 
    pago = document.getElementById('txtPago').value = ""; 

}