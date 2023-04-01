// Playground
function* getId(){
    let num=0;
    let catId=1;
    
    while(true){
        num += 1;
        yield catId = `MICHI${num}`;
    }
}
const id = getId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);

//Output
`
MICHI1
MICHI2
MICHI3
`