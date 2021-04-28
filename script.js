const calculate = () => {
    let input = document.getElementById('input').value;
    let noc = input.length;
    let output1 = document.getElementById('output1').innerHTML = "Total Characters = " + noc;

    let count = input.match(/\w+/g);
    res = count.length;
    let output2 = document.getElementById('output2').innerHTML = "Total Words = " + res;
}