//Exercise 24: More Practice
print("Let's practice everything.")
print('You\'d need to know \'bout escapes with \\ that do \n newlines and \t tabs.')

poem = "\tThe lovely world"+"\n"
+"with logic so firmly planted"+"\n"
+"cannot discern \n the needs of love"+"\n"
+"nor comprehend passion from intuition"+"\n"
+"and requires an explanation"+"\n"
+"\n\t\twhere there is none."

print("--------------")
print(poem)
print("--------------")


five = 10 - 2 + 3 - 6
print("This should be five: "+ five)

function secret_formula(started) {
    jelly_beans = started * 500
    jars = jelly_beans / 1000
    crates = jars / 100
    return [jelly_beans, jars, crates]
}


start_point = 10000
result = secret_formula(start_point)
beans = result[0]
jars = result[1]
crates = result[2]

print("With a starting point of: " + start_point)
print("We'd have "+beans+" beans, "+jars+" jars, and "+crates+" crates.")

start_point = start_point / 10
result = secret_formula(start_point)
beans = result[0]
jars = result[1]
crates = result[2]

print("We can also do that this way:")
print("We'd have "+beans+" beans, "+jars+" jars, and "+crates+" crates.")
