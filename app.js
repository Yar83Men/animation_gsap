window.onload = () => {
    gsap.to(".text", {
        x: 1400,
        y:50,        
        duration:2,
        ease:"elastic"
    });     

    gsap.to(".i-1", {
        x: 400,
        y:150,
        scale:1.3,
        duration:2
    });

    gsap.to(".s-1", {
        x: 400,       
        rotateY:360,
        duration:2
    });
    gsap.to(".s-2", {
        x: 470,       
        rotateY:360,
        duration:3
    });
    gsap.to(".s-3", {
        x: 540,       
        rotateY:360,
        duration:4
    });
    gsap.to(".logo", {
        y: 250,
        x:200, 
        ease:"elastic",
        delay:3,     
        duration:2
    });

    gsap.to(".b-1", {
        y:350, 
        delay:1,                          
        duration:0.5
    });

    gsap.to(".b-2", {
        y:250,  
        delay:1.5,                   
        duration:1
    });
    gsap.to(".b-3", {
        y:150, 
        delay:2,                     
        duration:1.5
    });
}
