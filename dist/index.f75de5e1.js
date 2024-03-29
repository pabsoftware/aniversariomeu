AOS.init();
const DataDoAniversario = new Date("Jan 25, 2024 19:00:00");
const timeStampDoAniversario = DataDoAniversario.getTime();
const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaDoAniversario = timeStampDoAniversario - timeStampAtual;
    const diaEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutoEmMs = 60000;
    const diasAteAniversario = Math.floor(distanciaDoAniversario / diaEmMs);
    const horasAteAniversario = Math.floor(distanciaDoAniversario % diaEmMs / horasEmMs);
    const minutosAteAniversario = Math.floor(distanciaDoAniversario % horasEmMs / minutoEmMs);
    const segundoAteAniversario = Math.floor(distanciaDoAniversario % minutoEmMs / 1000);
    document.getElementById("contador").innerHTML = `Ser\xe1 daqui a ${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundoAteAniversario}s`;
    if (distanciaDoAniversario < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "Evento expirado!";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
