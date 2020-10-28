let n = 11;
let index_pintados = [Math.floor(n/2)]
let string = '';

for (let i = 0; i < n/2+1; i += 1) {
    string = '';
    for (let j = 0; j < n; j += 1) {
        //console.log(index_pintados)
        if (index_pintados.indexOf(j) != -1) {
            string += "*";
        } else {
            string += " ";
        };
    };
    console.log(string)

    index_pintados.sort()
    index_pintados.push(index_pintados[index_pintados.length -1] + 1);
    index_pintados.push(index_pintados[0] - 1);

    if (index_pintados.length == n +2) {
        break;
    }
}