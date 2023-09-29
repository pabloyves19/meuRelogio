function updateTime(){
  const timeElement = document.getElementById('time');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
} 

setInterval(updateTime, 1000);//Atualiza a cada segundo.
updateTime();//chama a função para exibir o tempo atual imediatamente.

//Este código JavaScript cria uma função updateTime() que obtém a hora atual, minutos e segundos, formata-os como uma string de horário e, em seguida, atualiza o conteúdo do elemento com o ID time. A função setInterval é usada para atualizar o relógio a cada segundo.