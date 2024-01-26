/*Como não há uso de inteligência artificial com uma base de palavras conhecidas, julga-se ser necessário a criação de um dicionário onde as palavras
 podem ser conhecidas e efetuar a busca das palavras na string. 
Considerando que a string seja de um único valor (sem espaço) este dicionário será utilizado afim de procurar as palavras requeridas.
Para testar com diferentes valores, basta substituir o dicionario com as palavras a serem encontradas e a string na qual a função deve percorrer.

No corpo do arquivo, há testes comentados, para que você teste outras strings com o seu dicionário correspondente. Por exemplo: o DICIONÁRIO 1 deve ser testado com o VALOR 1.

*/

// Palavras a serem encontradas

//DICIONÁRIO 1
const dicionario = ["as", "no", "zebra", "network", "oi", "fui", "das"];

//DICIONÁRIO 2
// const dicionario = ["nzn", "baixaki", "tecmundo", "megacurioso", "vinte", "anos"];

//DICIONÁRIO 3
// const dicionario = ["mentalidade", "paz", "amor", "familia", "oi", "teste"];

////DICIONÁRIO 4 (este último não encontra resultados na string de valor único)
// const dicionario = ["Fabiana", "engenheira", "software", "computador", "mouse", "teclado"];


// Teste com o valor único

//VALOR 1
const valor = "asdfzxascvdfnozebranetworkpoasoidfuizxdfzxascvdcvdcvdasdnznznzasdf";

//VALOR 2
// const valor = "zxvnznlkeopbaixakiwrtxtecmundorwsqkpmegacuriosopwrtyivinteqwryopxanos";

//VALOR 3
// const valor = "zxvpazlkeopamorwrtxfamiliarwsqkpmentalidadepwrtywertyoipstestedfgjklx";

////DICIONÁRIO 4 (a string não contem os valores do DICIONÁRIO 4. Teste sem ocorrências.)
// const valor = "zxvpazlkeopamorwrtxfamiliarwsqkpmentalidadepwrtywertyoipstestedfgjklx";



function encontrarOcorrencias(str, palavrasDicionario) {
  // Inicializar um array para armazenar as palavras encontradas
  const palavrasEncontradas = [];

  // Iterar sobre as palavras especiais
  for (const palavra of palavrasDicionario) {
    // Encontrar todas as ocorrências da palavra na string
    const regex = new RegExp(palavra, 'g');
    const ocorrencias = str.match(regex);

    // Adicionar as ocorrências ao array de palavras encontradas
    if (ocorrencias) {
      palavrasEncontradas.push(...ocorrencias);
    }
  }

  // Remover duplicatas e ordenar por comprimento em ordem decrescente
  const palavrasOrdenadas = Array.from(new Set(palavrasEncontradas))
    .sort((a, b) => b.length - a.length);

  return palavrasOrdenadas;
}


const resultado = encontrarOcorrencias(valor, dicionario);

if(resultado.length > 0){
  
  console.log("Palavras encontradas ordenadas por comprimento em ordem decrescente:", resultado);
}else{
  
  console.log("Não há ocorrências de palavras do dicionário na string de entrada.");
}

