let a = 1 ;
let b = a.toExponential();
console.log(b);

let c = new Date();
let d = c.toLocaleString();
console.log(d);

let e = .12345;
let f = e.toPrecision(6);
console.log(f);

let e1 = 12.512345;
let f1 = e1.toPrecision(6);
console.log(f1);

let g = "hello world guvi"
let h = g.charAt(7);
console.log(h)

let h1 = g.charCodeAt(4);
console.log(h1)

let i = ["hello","guvi","world","geek"];
let j = i.slice(1,3);
console.log(j);

let i1 ="helloworldguvi"
let j1 = i1.substring(2);
console.log(j1);

let k = ["n","a","world","hello"];
let l = k.sort();
console.log(l);

let m = [3,10,5,65,100,1,20,2];
let n = m.sort();
m.sort(
    function (a,b){
        return b-a
    }
)
console.log(n);

let o = ['monday','tuesday','thursday','saturday']
let p = o.splice(3,'wednesday','friday')
// let q = o.splice(1,2)
console.log(o)

let r = new Date();
const s = r.getMilliseconds();
const t = r.setHours(2);
console.log(s);
console.log(t);

let u = Math.ceil(4.3);
let v = Math.floor(4.7);
let w = Math.round(4.6);
let x = Math.abs(9-5);

console.log(u);
console.log(v);
console.log(w);
console.log(x);
