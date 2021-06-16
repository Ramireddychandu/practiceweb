

document.getElementById("but").addEventListener("click",changepara);

function changepara()

{
    var k=document.getElementById("demo");
  if(k.innerHTML!="changed!!!")
  {
    var t=new Audio('tom-2.mp3');
    t.play();
  }

  k.innerHTML="changed!!!";
    var b=document.getElementById("but");
    b.innerHTML="course completed";
// alert(k.innerHTML);



  // alert("hello");

}
