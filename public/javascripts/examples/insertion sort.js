// from: http://www.ece.uci.edu/~chou/py02/python.html
function InsertionSort(A) {
    for (j = 1; j < A.length; j++) {
        key = A[j]
        i = j - 1
        while ((i >= 0) && (A[i] > key)) {
            A[i+1] = A[i]
            i = i - 1
        }
        A[i+1] = key
    }
}

input = [8, 3, 9, 15, 29, 7, 10]
InsertionSort(input)
print(input)

