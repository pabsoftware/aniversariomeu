
 AOS.init();

 const DataDoAniversario = new Date("Jan 24, 2024 19:00:00");
 const timeStampDoAniversario = DataDoAniversario.getTime();

 const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaDoAniversario = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteAniversario =  Math.floor(distanciaDoAniversario / diaEmMs);
    const horasAteAniversario = Math.floor((distanciaDoAniversario % diaEmMs) / horasEmMs);
    const minutosAteAniversario = Math.floor((distanciaDoAniversario % horasEmMs) / minutoEmMs);
    const segundoAteAniversario = Math.floor((distanciaDoAniversario % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = 
    `Será daqui a ${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundoAteAniversario}s`

 }, 1000);


