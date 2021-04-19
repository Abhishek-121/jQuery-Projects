
let burst = 0;
document.addEventListener('mouseover',function(e){
    if(e.target.className==="balloon"){
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent  = "Burst 💥 "; 
        burst++;
        e.target.removeEventListener('mouseover', function(){
            console.log("Removed");
        })
        if (burst === 27){
            console.log('all popped!');
            let gallery = document.querySelector('#balloon-gallery');
            let message = document.querySelector('#finished');
            gallery.innerHTML = '';
            message.style.display = 'block';
            $('#finished').fireworks({
                sound: true,
                opacity:  0.7,
                width: '100%',
                height: '100%'
            });
        }
    }
})

