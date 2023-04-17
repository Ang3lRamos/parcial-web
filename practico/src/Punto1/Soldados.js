function Solution(rangos){
    const count = {};
    let numSoldiers = 0;
  
    // contar el número de soldados en cada rango
    for (let rango of rangos) {
      if (count[rango]) {
        count[rango]++;
      } else {
        count[rango] = 1;
      }
    }
  
    // recorrer los rangos en orden ascendente
    for (let rango in count) {
      rango = parseInt(rango);
      const nextRank = rango + 1;
  
      if (count[nextRank]) {
        numSoldiers += count[rango];
        count[rango] = count[nextRank];
      } else {
        count[rango] = 0;
      }
    }
  
    return numSoldiers;
}

rangos = [001,000,000,000]
console.log(Solution(rangos)) 