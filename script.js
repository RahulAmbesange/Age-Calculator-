let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let result =document.getElementById("result");
/*.toISOString(): This method converts the Date object to a string representation of the date in simplified extended ISO 8601 format. The format is YYYY-MM-DDTHH:mm:ss.sssZ, where YYYY-MM-DD represents the date, THH:mm:ss.sss represents the time, and Z represents the UTC timezone. */


/* for "T" :  "T" character is used as a separator between the date portion and the time portion. This format helps to distinguish between the date and time components when representing datetime values in a string format. */



function calculateAge(){ //on button click
   let birthDate=new Date(userInput.value);
  
   let d1=birthDate.getDate();//birth Date
   let m1=birthDate.getMonth()+1;
   let y1=birthDate.getFullYear();

   let today=new Date(); //Current Date 

   let d2=today.getDate();
   let m2=today.getMonth()+1;
   let y2=today.getFullYear();



   let d3,m3,y3;
    //This is difference in days,months,years




   y3=y2-y1; // this show the difference between y2 and y1
   if(m2>=m1){
      m3=m2-m1;

   }
   else{
      y3--;
      m3=12+m2-m1;
   }

   if(d2>=d1){
      d3=d2-d1; //this is also shows differnce between d2 and d1
   }
   else{
     m3--;
     d3 = getDaysInMonth(y1,m1) + d2 - d1;
   }
   if(m3<0){ //if m3 is negative value
      m3=11;
      y3--;
   }
   result.innerHTML=`You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> days old `;

}

function getDaysInMonth(year,month){
      return new Date(year,month,0).getDate();
}