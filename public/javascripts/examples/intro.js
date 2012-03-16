// numbers!
age = 26
pi = 3.14159
// strings!
s = 'Rutherford Birchard Hayes'
tokens = s.split(' ')
firstName = tokens[0]
middleName = tokens[1]
lastName = tokens[2]
s2 = firstName + ' ' + middleName + ' ' + lastName
// 'if' statement - indentation matters!
if (s === s2)
    print('yes!!!')
else
    print('nooooooo')
// list (mutable sequence)
beatles = ['John', 'Paul', 'George']
beatles.push('Ringo')
// 'for' loop - indentation matters!
for (b in beatles)
    print('Hello', beatles[b])
// dict - mapping unique keys to values
netWorth = {}
netWorth['Bill Gates'] = 58000000000
netWorth['Tom Cruise'] = 40000000
netWorth['Joe Postdoc'] = 20000
for (person in netWorth)
    worth = netWorth[person]
    if (worth < 1000000)
        print('haha', person, 'is not a millionaire')
// testing dict membership
if ('Tom Cruise' in netWorth)
    print('show me the money!')
