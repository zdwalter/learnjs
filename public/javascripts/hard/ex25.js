//Exercise 25 { Even More Practice
function break_words(stuff) {
    //"""This function will break up words for us."""
    var words = stuff.split(' ')
    return words
}

function sort_words(words) {
    //"""Sorts the words."""
    var copy = words.slice()
    return copy.sort()
}

function print_first_word(words) {
    //"""Prints the first word after popping it off."""
    var word = words[0]
    print(word)
}

function print_last_word(words) {
    //"""Prints the last word after popping it off."""
    var word = words.slice(-1)
    print(word)
}

function sort_sentence(sentence) {
    //"""Takes in a full sentence and returns the sorted words."""
    var words = break_words(sentence)
    return sort_words(words)
}

function print_first_and_last(sentence) {
    //"""Prints the first and last words of the sentence."""
    var words = break_words(sentence)
    print_first_word(words)
    print_last_word(words)
}

function print_first_and_last_sorted(sentence) {
    //"""Sorts the words then prints the first and last one."""
    var words = sort_sentence(sentence)
    print_first_word(words)
    print_last_word(words)
}

//tests
sentence = "All good things come to those who wait."
words = break_words(sentence)
print(JSON.stringify(words))

sorted_words = sort_words(words)
print(JSON.stringify(sorted_words))

print_first_word(words)

print_last_word(words)

print_first_word(sorted_words)
print_last_word(sorted_words)

sorted_words = sort_sentence(sentence)
print(JSON.stringify(sorted_words))

print_first_and_last(sentence)
print_first_and_last_sorted(sentence)
