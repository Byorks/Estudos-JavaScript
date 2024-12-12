    // Esse método pega a hora atual
    
export default async function getTimeNow() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getUTCDate()).padStart(2,'0');
    const mes = String(dataAtual.getUTCMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getUTCFullYear();

    const horas = String(dataAtual.getUTCHours()).padStart(2, '0');
    const minutos = String(dataAtual.getUTCMinutes()).padStart(2, '0');

    const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
    console.log(dataAtual);
    console.log(dataFormatada);
    return dataFormatada;
}