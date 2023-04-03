function change(obj){
    for(let i = 0;i<obj.getAttribute('index');i++){
        viewwindow.children[i].style.left = '-100vw';
        
    }
    for(let i = parseInt(obj.getAttribute('index'))+1 ;i<viewwindow.children.length;i++){
        // console.log(i);
        viewwindow.children[i].style.left = '100vw';
        
    }
}

function zzin(obj){
    for(let i = 0;i<obj.getAttribute('index');i++){
        
        viewwindow.children[i].style.zIndex = '0';
    }
    for(let i = parseInt(obj.getAttribute('index'))+1 ;i<viewwindow.children.length;i++){
        // console.log(i);
        
        viewwindow.children[i].style.zIndex = '0';
    }
}