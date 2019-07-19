describe("Greetings",function(){
    it("Should return name and greet also in English ",function(){
        var greetMe = Greetings();
        greetMe.greet("axola");
        assert.equal(1 ,  greetMe.count()); 
    })

    it("Should return name and greet also in Isixhosa", function(){
   var greetName = Greetings();
        greetName.greet("Sipho");
        assert.equal(1,  greetName.count());
    })
    
    it("Should return name and greet also in Afrikaans", function(){
        var nameGreeted = Greetings();
        nameGreeted.greet("Nola");
        assert.equal(1,  nameGreeted.count());
         })
    it("Should return name that is given to test in any language", function(){
        var nameTest = Greetings();
        nameTest.greet("Zikhona");
        assert.equal(1,  nameTest.count());
    })
    
    
})