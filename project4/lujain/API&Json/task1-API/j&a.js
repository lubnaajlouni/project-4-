async function allinfo(){
    const fetc=await fetch("https://www.breakingbadapi.com/api/characters");
    const data=await fetc.json();
    console.log(data);
    let a=document.getElementById("drop");
    for (let i = 0; i <= data.length; i++) {
    //    a.innerHTML+=`"<option value='${data[i].img}'>${data[i].name}</option>"`
    
       a.innerHTML+=`"<option value='${data[i].name}'>${data[i].name}</option>"`
    }
  
}

allinfo();


async function imagess(){
    // let select=document.getElementById("drop").value;
    // document.getElementById("image").src=select;
        const fetc = await fetch ("https://www.breakingbadapi.com/api/characters");
         const data = await fetc.json();
         let val=document.getElementById("drop").value;
        console.log(data);
        for(var j=0;j<data.length;j++ ){
            if(data[j].name == val)
        document.getElementById("image").src=data[j].img;}
}
