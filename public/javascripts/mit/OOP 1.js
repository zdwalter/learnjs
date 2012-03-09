// Object-oriented programming intro
// Adapted from MIT 6.01 course notes (Section 3.5)
// http://mit.edu/6.01/mercurial/spring10/www/handouts/readings.pdf

function Staff601() {
    this.course = '6.01'
    this.building = 34
    this.room = 501
}

Staff601.prototype.salutation = function(self) {
    if (typeof self === 'undefined') self = this;
    return self.role + ' ' + self.name
}

pat = new Staff601()
print(pat.course)

pat.name = 'Pat'
pat.age = 60
pat.role = 'Professor'

print(pat.building)
pat.building = 32
print(pat.building)

print(pat.salutation())
print(Staff601.prototype.salutation(pat))
