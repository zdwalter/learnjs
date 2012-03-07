input = {"Mary":27, "Joe":30, "Ruth":43, "Bob":17, "Jenny":22}

youngPeople = []

for (person in input) {
    age = input[person]
    if (age < 30)
        youngPeople.push(person)
    else
        print("HAHA", person, "is too old!")
}

print("There are", youngPeople.length, "young people")

