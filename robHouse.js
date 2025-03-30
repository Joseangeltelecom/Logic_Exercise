// bottom-up approach without array
const robHouse = (nums) => { 

    let prevPrev = 0;
    let prev = 0;

    for (num of nums) {
        const current = Math.max(prevPrev + num, prev);
        prevPrev = prev;
        prev = current;
    }

    return prev;
}

// bottom-up approach with array
const robHouseArray = (nums) => {
    const n = nums.length;
    if (n === 0) return 0;
    const dp = new Array(n + 1);

    dp[0] = 0;
    dp[1] = nums[0];
    dp[2] = Math.max(nums[0], nums[1]);

    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }

    return dp[n];
};


const robHouseRecursive = (nums) => {
  const n = nums.length;
  if (n === 0) return 0;

  // Función recursiva que calcula el máximo valor para las primeras "i" casas.
  const rob = (casas, memo = {}) => {
    if (casas in memo) return memo[casas]; // Si ya está calculado, retorna el valor.
    if (casas === 0) return 0; // Base case: 0 casas → 0 dinero.
    if (casas === 1) return nums[0]; // Base case: 1 casa → su valor.
    if (casas === 2) return Math.max(nums[0], nums[1]); // Base case: 2 casas → máximo de ambas.

    // Fórmula recursiva:
    memo[casas] = Math.max(
      rob(casas - 1), // Opción 1: No robar la casa i-1.
      rob(casas - 2) + nums[casas - 1] // Opción 2: Robarla y sumar al máximo de i-2 casas.
    );

    return memo[casas];
  };

  return rob(n); // Calcula el máximo para las primeras "n" casas.
};

// creamos una arrar de n + 1 de elementos, donde n es la longitud de nums
// si n es 0, retornamos 0
// si n es 1, retornamos el primer elemento de nums
// si n es 2, retornamos el maximo entre el primer y segundo elemento de nums
// iteramos desde 3 hasta n
// en cada iteracion, calculamos el maximo entre el elemento anterior y el elemento dos posiciones atras mas el elemento actual de nums
// retornamos el ultimo elemento de dp
// se una nums[i - 1] porque el array dp tiene un elemento mas que el array nums


// console.log(robHouse([1, 2, 3, 1])); // 4
// console.log(robHouse([2, 7, 9, 3, 1])); // 12
// Time complexity: O(n)


// solucion pensanod en los indeces del array. Entonces usamos  nums.length - 1
const robHouseRecursion = (nums) => {
    const dp = (i, map = {}) => {
        if (i < 0) return 0;
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0], nums[1]);
        if (i in map) return map[i];

        const skip = dp(i - 1, map);
        const take = dp(i - 2, map) + nums[i];

        map[i] = Math.max(skip, take);
        return map[i];
    };

    return dp(nums.length - 1);
};


// solucion pensando en las casas. Entonces usamos nums.length
const robHouseRecursive2 = (nums) => {
  const n = nums.length;
  if (n === 0) return 0;

  // Función recursiva con memoización vía parámetro "map".
  const dp = (i, map = {}) => {
    // "map" se inicializa una vez por llamada a dp(n).
    if (i in map) return map[i];
    if (i === 0) return 0;
    if (i === 1) return nums[0];
    if (i === 2) return Math.max(nums[0], nums[1]);

    // Pasamos "map" explícitamente para compartir la misma instancia.
    const noRobar = dp(i - 1, map);
    const robar = dp(i - 2, map) + nums[i - 1];
    map[i] = Math.max(noRobar, robar);

    return map[i];
  };

  return dp(n); // Inicia la recursión con el "map" por defecto.
};

console.log(robHouseRecursive2([2, 7, 9, 3, 1])); // 12

