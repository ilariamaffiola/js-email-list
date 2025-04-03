// //mi recupero l'elemento del dom dove vado a mostrare il numero generato dall'entpoint
// let showNumber = document.getElementById('estract-number');
// console.log(showNumber);

// axios.get('https://flynn.boolean.careers/exercises/api/random/int').then((resp)=>{
//     //non per forza devo mettere resp come parametro posso metterci qualsiasi cosa 
//     //qui mi fa vedere tutto il JSON del programmatore che ci ha fornito l'API
//     console.log(resp);
//     console.log('---------------------------');
//     //La risposta è messa dentro data che è un oggetto
//     console.log(resp.data);
//     console.log('---------------------------');
//     //così mi recupera il numero causale generato con il console.log
//     console.log(resp.data.response);
//     //LA PROGRAMMAZIONE E' ASINCRONA QUINDI MAI METTERE IL CODICE PER LA RISPOSTA FUORI DA QUESTA FUNZIONE perché nel frattempo che fa questa funzione il mio javascript va avanti
//     showNumber.innerHTML = resp.data.response;
    
// });
let emails = document.getElementById('emails');
let button = document.getElementById('button');

for(let i=0; i<10;i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp)=>{
        console.log(resp.data.response);
        let email = resp.data.response;
        const li = document.createElement('li');
        //console.log(li);
        li.append(email);
        emails.appendChild(li);
    });
};
button.addEventListener('click', function(){
    console.log(emails);
    
});