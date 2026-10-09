function bubbleSort(lista) {
  let qtd = 0;
  let qtdTrocas = 0;
  for (let i = 1; i < lista.length; i++) {
    for (let j = 1; j < lista.length; j++) {
      qtd += 1;

      if (lista[j - 1] > lista[j]) {
        temp = lista[j - 1];
        lista[j - 1] = lista[j];
        lista[j] = temp;
        qtdTrocas += 1;
      }
    }
  }
  console.log(lista);
  console.log("Quantidade de comparações:" + qtd);
  console.log("Quantidade de trocas:" + qtdTrocas);
  return lista;
}
function selectionSort(lista) {
  qtd = 0;
  qtdTrocas = 0;

  for (let i = 0; i < lista.length - 1; i++) {
    let indiceMenor = i;
    oMenor = lista[i];
    for (let j = i + 1; j < lista.length; j++) {
      qtd++;
      if (oMenor > lista[j]) {
        oMenor = lista[j];
        qtdTrocas++;
        indiceMenor = j;
      }
    }
    temp = lista[i];
    lista[i] = oMenor;
    lista[indiceMenor] = temp;
  }
  console.log(lista);
  console.log("Quantidade de comparações:" + qtd);
  console.log("Quantidade de trocas:" + qtdTrocas);
  return lista;
}

function insertionSort(lista) {
  let qtdTrocas = 0;
  for (let i = 1; i < lista.length; i++) {
    let temp = lista[i];
    let j = i - 1;

    while (j >= 0 && lista[j] > temp) {
      lista[j + 1] = lista[j];
      j--;
      qtdTrocas++;
    }

    lista[j + 1] = temp;
  }

  console.log(lista);
  console.log("Quantidade de comparações:" + qtdTrocas);
  console.log("Quantidade de trocas:" + qtdTrocas);
  return lista;
}
