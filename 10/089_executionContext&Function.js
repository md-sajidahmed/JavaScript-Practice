abc()

function abc() {
    console.log('I am Sajid')
}


/* Here the code has executed though the function is called before the function is declared. Because here scope chain is maintained and
in the creation phase, that "abc" function has been stored already in an object with a reference. */