function logar(){
    let nome = document.getElementById('inputNome').value;

    if(nome.lenght < 3){
        document.getElementById('alertas').innerHTML = "Nome muito curto!";
        document.getElementById('alertas').style= '{color: "red"; font-Weight: "bolder";}';
        
        return;//para a função logar()
    }

    sessionStorage.setItem('usuario',nome);
    window.location = "/stepchat";

}