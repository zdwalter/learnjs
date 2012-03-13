//Exercise 40: Dictionaries, Oh Lovely Dictionaries
cities = {'CA': 'San Francisco', 'MI': 'Detroit',
                     'FL': 'Jacksonville'}

cities['NY'] = 'New York'
cities['OR'] = 'Portland'

function find_city(themap, state) {
    if (state in themap)
        return themap[state]
    else
        return "Not found."
}

// ok pay attention!
cities['_find'] = find_city

states = ['CA', 'FL', 'O', 'OR', 'VT']
for (var i in states) {
    var state = states[i]
    // this line is the most important ever! study!
    city_found = cities['_find'](cities, state)
    print(state, city_found)
}
