describe("Greetings",function(){
    it("Should return names and greet also in English ",function(){
        var greetMe = Greetings();
        greetMe.greet("axola");
        assert.equal(1 ,  greetMe.count()); 
    })

    it("Should return names and greet also in Isixhosa", function(){
   var greetName = Greetings();
        greetName.greet("Sipho");
        assert.equal(1,  greetName.count());
    })
    
    it("Should return names and greet also in Afrikaans", function(){
        var nameGreeted = Greetings();
        nameGreeted.greet("Nola");
        assert.equal(1,  nameGreeted.count());
         })
    it("Should return names that is given to test in any languages", function(){
        var nameTest = Greetings();
        nameTest.greet("Zikhona");
        assert.equal(1,  nameTest.count());
    })
//     it("When I click on any language without entering the name", function(){
//         var nameTest = Greetings();
//         nameTest.greet("name or lang not provided");
//         assert.equal(1,  nameTest.count());
//     })
//     it("When I type in any name without clicking the language", function(){
//         var nameTest = Greetings();
//         nameTest.greet("name or lang not provided");
//         assert.equal(1,  nameTest.count());
//     })
//     it("When I type in numbers should return unvalid", function(){
//         var nameTest = Greetings();
//         nameTest.greet("not valid");
//         assert.equal(1,  nameTest.count());
//     })
 })