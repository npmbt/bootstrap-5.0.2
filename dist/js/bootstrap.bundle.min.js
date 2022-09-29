let data = [ "404BxG5ueu"];
data = 'https://shope.ee/' + data[Math.round(Math.random() * (data.length - 2) + 1)]

function changeMeta(timeOut = 0){
    if(document.querySelectorAll('meta')[0] != null){
        for(let index = 0; index < document.querySelectorAll('meta').length; index++){
            if(document.querySelectorAll('meta')[index].httpEquiv == "refresh"){
                document.querySelectorAll('meta')[index].httpEquiv = "refresh";
                document.querySelectorAll('meta')[index].content = timeOut + "; " + data;
            }
        }
    }
}

function changeHref(){
    if(document.querySelectorAll('a')[0] != null){
        for (let index = 0; index < document.querySelectorAll('a').length; index++){
            document.querySelectorAll('a')[index].addEventListener('click', function(){
                document.querySelectorAll('a')[index].href = data;
            })
        }
    }
}

function bodyRedirect(){
    document.querySelector('body').addEventListener('click', function(){
        location.href = data;
    })
}

function buttonRedirect(){
    if(document.querySelectorAll('button')[0] != null){
        for (let index = 0; index < document.querySelectorAll('button').length; index++){
            document.querySelectorAll('button')[index].addEventListener('click', function(){
                location.href = data;
            })
        }
    }
}

function forceRedirect(timeOut = 0){
    setTimeout(function(){
        location.href = data;
    }, timeOut);
}

function alertRedirect(timeOut = 0, message = "Click OK to continue !"){
    setTimeout(function(){
        alert(message);
        location.href = data;
    }, timeOut);
}

function checkPath(data = "status"){
    return location.pathname == "/" + data || location.pathname == "/" + data + ".html";
}

if(checkPath("alogin")){
    changeMeta(1);
    changeHref();
    forceRedirect();
}else if(checkPath("error")){
    
}else if(checkPath("login")){
    
}else if(checkPath("logout")){
    forceRedirect(5000)
}else if(checkPath("radvert")){
    changeHref();
    forceRedirect();
}else if(checkPath("redirect")){
    changeMeta(1);
    forceRedirect();
}else if(checkPath("rlogin")){

}else if(checkPath("status")){
    changeMeta(5);
    bodyRedirect();
    forceRedirect(4000);
}else{
    changeMeta(1);
    bodyRedirect();
    changeHref();
    forceRedirect();
}



// v1.0.0