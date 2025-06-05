//const prompt = require('prompt-sync')();
//const naav = prompt("what is your name?");
//console.log("hello,"+ naav +"!");

function sq(x)
{
   let ans=0;
   ans=x*x;
   return ans;
}
console.log("this is the ans:"+sq(12));


function h(name, b)
{
   console.log("hello:" +name+"!");
   b();
}
function Cb()
{
   console.log("hi!");

}
h("mansvi",Cb);