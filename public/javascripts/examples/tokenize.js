input = 'John,Doe,1984,4,1,male'

tokens = input.split(',')
firstName = tokens[0]
lastName = tokens[1]
birthdate = [parseInt(tokens[2]), parseInt(tokens[3]), parseInt(tokens[4])]
isMale = (tokens[5] == 'male')

print('Hi', firstName, lastName)
