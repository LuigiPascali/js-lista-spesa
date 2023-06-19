// // PRIMA VERSIONE: 

// // Definisco la lista della spesa come un array
// const listaSpesa = ["mele", "pane", "latte", "uova", "formaggio"];

// // Inizializzazione variabile 
// let i = 0;

// // Iterazione attraverso l'array della lista della spesa utilizzando un ciclo while
// while (i < listaSpesa.length) {
// // Stampo l'elemento corrente della lista della spesa sulla console
// console.log(listaSpesa[i]);

// // Incremento la variabile contatore
// i++;
// }

// SECONDA VERSIONE: 

// Array per la lista della spesa
const shoppingList = [];

// Selezion0 l'elemento del DOM in cui verrà visualizzata la lista della spesa
const shoppingListElement = document.getElementById("shopping-list");

// Selezion0 il pulsante per l'aggiunta del prodotto
const addProductBtn = document.getElementById("add-product-btn");

// Aggiungo un event listener al pulsante per gestire l'aggiunta del prodotto
addProductBtn.addEventListener("click", addProduct);

// Prompt per l'inserimento del prodotto
function addProduct() {
let product = prompt("Inserisci il prodotto");

// Controllo se il valore inserito è numerico
if (!isNaN(parseFloat(product)) && isFinite(product)) {
alert("Inserisci un testo, valori numerici non accettati!"); // Mostra un alert se viene inserito un valore numerico
return; // Interrompi l'esecuzione della funzione
}

let quantity;
while (true) {
quantity = prompt("Inserisci la quantità da acquistare per " + product); // Prompt per l'inserimento della quantità

// Controllo se il valore inserito per la quantità è un numero
if (!isNaN(quantity) && quantity !== null && quantity !== "") {
  quantity = parseInt(quantity); // Converti la quantità in un numero intero
  break; // Esci dal ciclo while se la quantità è valida
}
// Mostra un alert se viene inserito un valore non numerico per la quantità
alert("Questo campo accetta solo valori numerici!"); 
}

shoppingList.push({ product, quantity }); // Aggiungo il prodotto e la quantità all'array della lista della spesa

// Genero l'elemento per il prodotto e aggiungilo alla lista

const listItem = document.createElement("li");
listItem.classList.add("list-group-item");
listItem.textContent = product + " - Quantità: " + quantity;
shoppingListElement.appendChild(listItem);
}

// Ciclo while per stampare gli elementi della lista della spesa
let i = 0;
while (i < shoppingList.length) { let item = shoppingList[i]; if (!item.product) { alert("Inserisci un valore testuale per continuare"); continue; } document.write(item.product + " - Quantità: " + item.quantity + 
" ");
i++;
}









