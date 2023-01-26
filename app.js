function Copy() {
    let password = document.getElementById("passinput").value;
    navigator.clipboard.writeText(password);
}

function Generate() {
    document.getElementById("passinput").value = "";
    
    const UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const SpecialChar = ["!", "(", ")", "?", "[", "]", "~", "#", "$", "&", "%"];

    const izmesano = UpperCase.sort(() => 0.5 - Math.random());
    izmesano.slice(20);
    console.log(izmesano);

    LowerCase.sort(() => 0.5 - Math.random());
    console.log(LowerCase);

    Numbers.sort(() => 0.5 - Math.random());
    console.log(Numbers);

    SpecialChar.sort(() => 0.5 - Math.random());
    console.log(SpecialChar);

    
}