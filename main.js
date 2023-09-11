/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa inserendo il percoso in una propietá dell'oggetto restituito dalla funzione data.
*/


  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Benvenuto su VueJS!',
        bonusImg: 'https://fastly.picsum.photos/id/905/300/300.jpg?hmac=gFWpjb4rzOZaRW0-vPtSORM_vkI-FnI2AAJjZW4eU6w' 
        
      }
    }
  }).mount('#app')



