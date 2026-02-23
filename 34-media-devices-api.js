// solicitar permisos para usos de camara y microfono 

const button =  document.querySelector(".button");

button.addEventListener('click', async()=> {

    try {
        await navigator.mediaDevices.getUserMedia({video: true, audio: true
    });


    const pemission = await Notification.requestPermission();

    if (pemission === 'granted') {
        new Notification("Permisos concedidos",{
            body: "¡Camara y microfono activados!",
            icon: "/assets/icons/image1.png"
        });

    }else{
        console.log(`permiso denegado`);
    }


}catch(error){
        console.log(`Error al solicitar el permisos`, error);
        alert(`No se concedieron los permisos solicitados`);
        
    }






});