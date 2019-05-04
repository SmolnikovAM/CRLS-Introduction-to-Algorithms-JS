function merge(A, p, q, r) {
  const n1 = q - p + 1;
  const n2 = r - q;
  const L = [];
  const R = [];
  for (let i = 0; i < n1; i += 1) L[i] = A[p + i];
  for (let j = 0; j < n2; j += 1) R[j] = A[q + j + 1];
  let i = 0;
  let j = 0;
  for (let k = p; k <= r; k += 1)
    if (j === n2 || (i < n1 && L[i] <= R[j])) {
      A[k] = L[i];
      i += 1;
    } else {
      A[k] = R[j];
      j += 1;
    }
}

function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

function run() {
  const arr = [10, 3, 1, 5, 2, 4, 6, 9, 7, 8];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
}

module.exports = { run, mergeSort, merge };
