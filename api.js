const xhr=new XMLHttpRequest();
xhr.open('GET',"https://api.github.com/users/hiteshchaudhary");
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        const data=JSON.parse(this.responseText);
        console.log(data.avatar_url);
    }
    
}

xhr.send();