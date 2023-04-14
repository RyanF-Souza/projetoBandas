const heart=document.getElementsByClassName('heart')

Array.prototype.forEach.call(heart,element=>{
    element.addEventListener('click',()=>{
        let color=event.currentTarget.children[0].style

        if(color.fill=='red'){
            color.fill='white'
        }else{
            color.fill='red'
        }
    })
});