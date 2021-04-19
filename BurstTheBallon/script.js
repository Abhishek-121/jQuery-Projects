
let burst = 0;
$(document).ready(function(){
    document.addEventListener('mouseover',function(e){
    if(e.target.className==="balloon"){
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent  = "Burst 💥 "; 
        burst++;
        e.target.removeEventListener('mouseover', function(){
            console.log("Removed");
        })
        if (burst === 27){
            let gallery = $('#balloon-gallery');
            let message = $('#finished');
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
    
});
