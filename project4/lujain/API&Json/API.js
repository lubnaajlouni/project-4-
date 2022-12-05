async function API(){
    const fet = await fetch("https://www.breakingbadapi.com/api/characters");
    const data=await fet.json();
    console.log(data);    
    for (let i = 0; i < data.length; i++) {
       document.write("<h1>the char_id : "+ data[i].char_id+" </h1>");
       document.write("<h1>the name : "+ data[i].name+" </h1>");
      
  
    document.write("<h1>the category : "+ data[i].category+" </h1> <hr>");

    
    }
}
API();