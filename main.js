title=document.querySelector('.title');
turn ='X';
let arr=[];
function choose (num1 , num2 ,num3){
    title.innerHTML=`${arr[num1]} winner`;
        document.getElementById('item'+num1).style.backgroundColor='black';
        document.getElementById('item'+num2).style.backgroundColor="black";
        document.getElementById('item'+num3).style.backgroundColor="black";
        setInterval(function(){ title.innerHTML +="."},1000);
        setTimeout(function(){ location.reload()},4000);

}
function winner(){
    for(var i=1 ;i<10;i++){
      arr[i]= document.getElementById('item'+i).innerHTML;
    }
    if(arr[1]==arr[2] && arr[2]==arr[3] && arr[2]!=''){
        choose (1,2,3);  
    }
    if(arr[4]==arr[4] && arr[4]==arr[6] && arr[4]!=''){
        choose (4,5,6);
       
    }
    if(arr[7]==arr[8] && arr[8]==arr[9] && arr[9]!=''){
        choose (7,8,9);
       
    }
    if(arr[1]==arr[4] && arr[4]==arr[7] && arr[4]!=''){
        choose (1,4,7);
       
    }
    if(arr[2]==arr[5] && arr[8]==arr[5] && arr[5]!=''){
        choose (2,5,8);
       
    }
    if(arr[3]==arr[6] && arr[6]==arr[9] && arr[3]!=''){
        choose (6,9,3);
       
    }
    if(arr[1]==arr[5] && arr[5]==arr[9] && arr[1]!=''){
        choose (1,5,9);
       
    }
    if(arr[3]==arr[5] && arr[7]==arr[3] && arr[3]!=''){
        choose (5,7,3);
       
    }
}
function game (id){
    let elem=document.getElementById(id);
    if(turn ==='X' &&   elem.innerHTML==''){
        elem.innerHTML='X';
        turn ='O';
        title.innerHTML='O';
        


    }
    else if (turn ==='O' &&   elem.innerHTML=='') {
        elem.innerHTML='O';
        turn ='X';
        title.innerHTML='X';
            
    } 

    winner();
}