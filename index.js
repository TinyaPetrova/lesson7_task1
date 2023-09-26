// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
    const btn2 = document.createElement('button')
    btn2.id = 'magic-btn-2'
    btn2.className = 'second-btn'
    btn2.innerText = 'Я изменю тебя'
    btn2.style.backgroundColor = '#a78b71'
    btn2.style.color = 'white'

// здесь можете создать EventListener для второй кнопки

    btn2.addEventListener('click', () => {
        const paragraph = document.createElement('p')
        paragraph.innerText = 'Кнопки и впрямь изменились :)'
        paragraph.id = 'text'
        btn2.style.backgroundColor = btn.style.backgroundColor;
        btn2.style.color = btn.style.color;
        
        document.body.appendChild(paragraph)
    })

    document.body.appendChild(btn2)
    btn.style.backgroundColor = '#9c4a1a';
    btn.style.color = 'black'
})