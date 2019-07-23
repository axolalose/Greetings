function Greetings(loc) {
    var counter = 0;
    var result = ''
    var greetedName = loc || {}
   
    //var name = "";
    


    function greet(name, lang) {

        var matches = name.match(/[a-zA-Z]+/g, "");
        var sameName = name.toLowerCase()
        var nameName = name.toUpperCase().charAt(0) + name.slice(1);
        //console.log(lang)
        //console.log(name)
        //counter++
        if(matches !== null){
    
        if (greetedName[sameName] === undefined) {
            greetedName[sameName] = 0;
        }
        console.log(greetedName)

        if (!lang || !name) {
            return "name or lang not provided"

        } else {
            counter++
        }
        // if {
        //      matches = true;

        // }
    

    if (lang === "Xhosa") {
        return "Molo, " + nameName;
    }

    if (lang === "English") {
        return "Hello, " + nameName;
    }
    if (lang === "Afrikaans") {
        return "Hallo, " + nameName;
    }
}
else{
    return" Please enter the name "
}
}

function getName() {
    var x = greetedName;
    return x;
}

function count() {
    var a = Object.keys(greetedName)
    return a.length;
}

return {
    greet,
    getName,
    count,
}
}