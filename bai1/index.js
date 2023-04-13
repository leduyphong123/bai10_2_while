var sum = 0;
let num = parseInt(prompt("nhap vao so bat ki"));
while (num != -1) {
    num = parseInt(prompt("nhap vao so bat ki"));
    if(num !=-1){
        sum += num;
    }
    alert(num);
}
alert(sum);