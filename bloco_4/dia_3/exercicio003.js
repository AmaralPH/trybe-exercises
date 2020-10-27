let n = 5;
let string 
for (let i = 1; i <= n; i += 1) {
    string = "";
    
    for (let esp = 0; esp < n-i; esp += 1) {
        string += " ";
    }

    for (let ast = 0; ast < i; ast += 1) {
        string += '*';
    }

    console.log(string)
}