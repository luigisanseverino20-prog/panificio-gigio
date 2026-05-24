const prodotti = [
    { nome: "Altamura", descrizione: "pane di semola", prezzo: "€ 4,00" },
    { nome: "Integrale", descrizione: "farina macinata a pietra", prezzo: "€ 1,50" },
    { nome: "Segala", descrizione: "farina di segala", prezzo: "€ 5,00" },
    { nome: "Cereali", descrizione: "farina di 5 cereali", prezzo: "€ 3,00" },
]

const cards = prodotti.map((prodotto) => {
    return `
    <div class="col-md-3">
      <div class="card">
        <h3>${prodotto.nome}</h3>
        <p>${prodotto.descrizione}</p>
        <p>${prodotto.prezzo}</p>
      </div>
    </div>
  `;
});     

document.getElementById("griglia-prodotti").innerHTML = cards.join("");

