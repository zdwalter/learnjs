//Exercise 33: While Loops
i = 0
numbers = []

while (i < 6) {
    print("At the top i is " + i)
    numbers.push(i)

    i = i + 1
    print("Numbers now: ", JSON.stringify(numbers))
    print("At the bottom i is " , i)
}


print("The numbers: ")

for (var num in numbers)
    print(numbers[num])
