// assentos selecionados do localStorage
const assentosSelecionados = localStorage.getItem("selectedSeats");

if (assentosSelecionados) {
  document.getElementById("assentos").value = assentosSelecionados;

  const quantidade = assentosSelecionados
                        .split(",")
                        .filter(s => s.trim() !== "").length;

  // valor
  const valorTotal = quantidade * 329;

  // valor em real
  document.querySelector("input[name='valor']").value = valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
