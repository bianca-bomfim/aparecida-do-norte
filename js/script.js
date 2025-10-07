// Seleciona todos os elementos com a classe 'seat'
const seats = document.querySelectorAll('.seat');
const continueBtn = document.querySelector('.continue-button');

const seatPrice = 329; // preço

seats.forEach(seat => {

  seat.addEventListener('mouseover', () => seat.classList.add('zoom'));
  seat.addEventListener('mouseout', () => seat.classList.remove('zoom'));

  // Selecionar/deselecionar assento
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
  });
});

continueBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const selectedSeats = document.querySelectorAll('.seat.selected');
  const seatNumbers = [...selectedSeats].map(seat => seat.dataset.seat);

  const total = seatNumbers.length * seatPrice;

  localStorage.setItem("selectedSeats", seatNumbers.join(", "));
  localStorage.setItem("totalPrice", total);

  window.location.href = "compra.html";
});




