const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)
const llamaNamer = function () {

        const suffix = " the Llama";
        let name = possibleNames[randomizer];
        return name + suffix;
    
}

nameMaker = llamaNamer();
console.log(nameMaker);

