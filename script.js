function carregar(){
    let horaatual = new Date();
    let hora = horaatual.getHours();
    let exibicaohora = window.document.getElementById('hora');
    var exibicaoimagem = window.document.getElementById('img');
    if(hora != 0 && hora != 1){
        exibicaohora.innerHTML = `Agora são <strong> ${hora} </strong> horas.`;
    }
    else{
        exibicaohora.innerHTML = `Agora são <strong> ${hora} </strong> hora.`;
    }
    if(hora >= 0 && hora < 12){
        exibicaoimagem.src = 'bomdia.png';
        window.document.body.style.backgroundColor = '#8fbadb';
    }
    else if (hora >= 12 && hora < 18){
        exibicaoimagem.src = 'boatarde.png';
        window.document.body.style.backgroundColor = '#813c15';
    }
    else{
        exibicaoimagem.src = 'boanoite.png';
        window.document.body.style.backgroundColor = '#4b769f';
    }
}