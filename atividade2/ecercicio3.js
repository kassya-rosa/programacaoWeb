function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(Math.floor(Math.random(1) * 10)); // Filling the matrix with random values between 0 and 9
        }
        matrix.push(row);
    }
    return matrix;
}

function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        throw new Error("Não é possível calcular.");
    }

    const resultMatrix = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        resultMatrix.push(row);
    }

    return resultMatrix;
}

const rowsA = 2;
const colsA = 2;

const rowsB = 2;
const colsB = 2;

const matrixA = createMatrix(rowsA, colsA);
console.log("Matrix A:");
console.log(matrixA);

const matrixB = createMatrix(rowsB, colsB);
console.log("Matrix B:");
console.log(matrixB);

try {
    const resultMatrix = multiplyMatrices(matrixA, matrixB);
    console.log("Matrix A * Matrix B:");
    console.log(resultMatrix);
} catch (error) {
    console.error(error.message);
}
