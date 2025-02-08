const rooms = document.querySelectorAll('.room--best-price');

rooms.forEach((room) => {
  room.addEventListener('mouseenter', () => {
    room.classList.add('hovered'); 
  });

  room.addEventListener('mouseleave', () => {
    room.classList.remove('hovered');
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const rooms = document.querySelectorAll(".room");
  
    rooms.forEach((room) => {
      let isBooked = false; 

      const bookButton = room.querySelector(".room__book-button");
      const roomBook = room.querySelector(".room__book");
      const reservedMessage = document.createElement("p");
      reservedMessage.classList.add("room__reserved-message");
      reservedMessage.innerHTML = '<div class="room__reserved-message">Номер зарезервирован<br>Перейти к <span class="room__reserved-message-link"><a class="room__reserved-message-link" href="#">оплате</a></span></div>';
      reservedMessage.style.display = "none"; 
      reservedMessage.style.marginTop = "10px";
  
      roomBook.appendChild(reservedMessage);
  
      bookButton.addEventListener("click", (event) => {
        event.stopPropagation(); 
        isBooked = true; 
      });
  
      room.addEventListener("mouseleave", () => {
        if (isBooked) {
          room.classList.add("room__reserved");
          reservedMessage.style.display = "block";
          bookButton.style.display = "none"; 
        }
      });
  
    
      room.addEventListener("click", () => {
        if (!room.classList.contains("room__reserved")) return; 
        room.classList.remove("room__reserved"); 
        reservedMessage.style.display = "none"; 
        bookButton.style.display = "block"; 
        isBooked = false; 
      });
    });
  });