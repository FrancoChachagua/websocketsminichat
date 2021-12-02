// para que se conecte al socket, instancia del socket del otro lado
const socket = io();
let input = document.getElementById('mensaje');
let user = document.getElementById('user');
input.addEventListener('keyup', (e)=>{
    if(e.key==="Enter"){
        if(e.target.value){
            socket.emit('message', {user:user.value, message:e.target.value});
        }
    }
})
socket.on('messagelog',data=>{
    console.log(data);
    let p = document.getElementById('log');
    let messagess = data.map((msjs)=>{
        return `<div>
                    
                    <span>${msjs.user} : ${msjs.message}</span>

                </div>`
    } ).join('');
    p.innerHTML= messagess
})