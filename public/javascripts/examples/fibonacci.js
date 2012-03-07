// Infinite Fibonacci!!!

arr = [1, 1]

print(arr[0])

while(true) {
    print(arr[1])
    tmp = arr[0] + arr[1]
    arr.push(tmp)
    arr.shift() // remove first 
}
