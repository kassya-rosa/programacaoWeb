
function Matrix(rows, cols) {
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

function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];

    for (let j = 0; j < cols; j++) {
        const transposedRow = [];
        for (let i = 0; i < rows; i++) {
            transposedRow.push(matrix[i][j]);
        }
        transposedMatrix.push(transposedRow);
    }

    return transposedMatrix;
}

const rows = 3;
const cols = 2;

const originalMatrix = Matrix(rows, cols);
console.log("Matriz original:");
console.log(originalMatrix);

const transposedMatrix = transposeMatrix(originalMatrix);
console.log("Matriz transposta:");
console.log(transposedMatrix);
