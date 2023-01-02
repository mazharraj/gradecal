// function admissionForm() {
//     // Name
//     let a = document.getElementById('name').value;
//     // Father's / Mother's Name: 
//     let b = document.getElementById('father').value;
//     // Address :
//     let c = document.getElementById('address').value;
//     // Religion :
//     let d = document.getElementById('religion').value;
//     // Gender :
//     let e = document.getElementById('gender').value;
//     // Mobile Number :
//     let h = document.getElementById('mobile').value;
//     // Birth Date :
//     let f = document.getElementById('date').value;
//     // Image :
//     let x = document.getElementById('image');
    
    
//     // Display in the main form:
//     document.getElementById('demo7').innerHTML = x;
//     document.getElementById('demo').innerHTML = a;
//     document.getElementById('demo1').innerHTML = b;
//     document.getElementById('demo2').innerHTML = c;
//     document.getElementById('demo3').innerHTML = d;
//     document.getElementById('demo4').innerHTML = e;
//     document.getElementById('demo5').innerHTML = f;
//     document.getElementById('demo6').innerHTML = h;
// }

// var x = 0.5;
// var y = 0.4;
// var z = -20;

// // Math.Ceil :
// var mc = Math.floor(x);
// console.log(mc);

// var mf = Math.ceil(y);
// console.log(mf);

// var ma = Math.abs(z);
// console.log(ma);

// function ludoButton() {
//     var rndm = Math.random() * 6;
//     rndm = Math.ceil(rndm);
//     console.log(rndm);
//     document.getElementById('demo').innerHTML = rndm;
// }

function ludoButton() {
    var x = document.getElementById('nmbr').value;
    var y = 32;
    var z = 79;
    var a = 69;
    var b = 59;
    var c = 49;
    var d = 39;
    var e = 100;

    if(x > e){
        document.getElementById('demo').innerHTML='Max : 100';
        document.getElementById('demo').style='color:Blue;';
        document.getElementById('grade').innerHTML="0.00";
    }

    else if(x > z){
        document.getElementById('demo').innerHTML='A+';
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="5.00";
    }

    else if(x > a){
        document.getElementById('demo').innerHTML='A';
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="4.00";
    }

    else if(x > b){
        document.getElementById('demo').innerHTML='A-';
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="3.50";
    }

    else if(x > c){
        document.getElementById('demo').innerHTML='B';
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="3.00";
    }

    else if(x > d){
        document.getElementById('demo').innerHTML='C';
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="2.00";
    }

    else if(x > y){
        document.getElementById('demo').innerHTML="D";
        document.getElementById('demo').style='color:green;';
        document.getElementById('grade').innerHTML="1.00";
    }
    
    else{
        document.getElementById('demo').innerHTML='Failed';
        document.getElementById('demo').style='color:red;';
        document.getElementById('grade').innerHTML=0.00;
    }
}

