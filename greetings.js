function Greetings(loc) {
    var counter = 0;
    var result = ''
    var greetedName = loc || {}
    //var name = "";
   

    function greet(name, lang) {
        console.log(lang)
        console.log(name)
        //counter++
        if (greetedName[name] === undefined) {
            greetedName[name] = 0;
        }
        console.log(greetedName)

        if (!lang || !name) {
            return "name or lang not provided"

        } else {
            counter++

        } if (lang === "Xhosa") {
            return "Molo, " + name;
        }

        if (lang === "English") {
            return "Hello, " + name;
        }
        if (lang === "Afrikaans") {
            return "Hallo, " + name;
        }
    }

    function getName() {
        var x = greetedName;
        return x;
    }

    function count() {
        var a = Object.keys(greetedName)
        return a.length ;
    }

    return {
        greet,
        getName,
        count,
    }
}