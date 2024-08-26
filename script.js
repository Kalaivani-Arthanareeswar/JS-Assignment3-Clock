const day=document.getElementById('day')
const hour=document.getElementById('hour');
const minute=document.getElementById('min');
const second=document.getElementById('sec');
const ampm=document.getElementById('am-pm');
var monthName=['January','February','March','April','May','June',"July",'August','September','October','November',"December"];
const clock=setInterval(function time()
{
    let today=new Date();
    let d=today.getDate();
    let m=today.getMonth();
    let y=today.getFullYear();
    let h=today.getHours();
    let min=today.getMinutes();
    let sec=today.getSeconds();
    if (h > 12) 
    {
      h = h-12;
      ampm.innerHTML = "PM";
    }
    else
     {
      ampm.innerHTML = "AM";
    }

    day.innerHTML=`${d} ${monthName[m]} ${y}`;
    hour.innerHTML=h<10? "0"+h:h;
    minute.textContent=min<10? "0"+min:min;
    second.innerText=sec<10? "0"+sec:sec;
})