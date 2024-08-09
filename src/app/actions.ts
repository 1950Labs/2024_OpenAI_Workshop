interface Action {
    id: number,
    name: string
}

export const actions: Action[] = [
    {
        id: 1,
        name: '1. Refactorización de código'
    },
    {
        id: 2,
        name: '2. Explicación de código'
    },
    {
        id: 3,
        name: '3. Identificación y corrección de bugs'
    },
    {
        id: 4,
        name: '4. Corrección de nomenclatura'
    },
    {
        id: 5,
        name: '5. Generación de documentación'
    },
    {
        id: 6,
        name: '6. Generación de pruebas unitarias'
    },
]

export const codeExamples = [
    {
        id: 1,
        name: 'Bubble sort',
        code: `
            function bubbleSort(arr) {
                let n = arr.length;
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n - i - 1; j++) {
                        if (arr[j] > arr[j + 1]) {
                        // Intercambiar elementos
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                        }
                    }
                }
                return arr;
            }`,
    },
    {
        id: 2,
        name: 'Búsqueda lineal',
        code: `
            function linearSearch(arr, target) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === target) {
                    return i; // Retornar el índice si se encuentra
                    }
                }
                return -1; // Retornar -1 si no se encuentra
            }`,
    },
    {   id: 3,
        name: 'Secuencia de Fibonacci',
        code: `
        function fibonacci(n) {
            if (n <= 1) return n;
            let a = 0, b = 1, temp;
            for (let i = 2; i <= n; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }
            return b;
        }`
    },
    {
        id: 4,
        name: 'Chequear si un número es primo',
        code:`
        function isPrime(n) {
            if (n <= 1) return false;
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                return false; // Encontró un divisor
            }
        }
        return true; // No se encontraron divisores
        }`
    }

]