let xhr = new XMLHttpRequest();
const img = document.getElementById('loader');
const items = document.getElementById('items');


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
        img.classList.remove('loader_active');
        const data = JSON.parse(xhr.responseText);
        for (let key in data['response']['Valute']) {
            let dt = `<div class="item"><div class="item__code">${key}</div><div class="item__value">${data['response']['Valute'][key]['Value']}</div><div class="item__currency">руб.</div></div>`;
            items.insertAdjacentHTML('beforeend', dt);
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send()