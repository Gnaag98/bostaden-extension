const table = document.querySelector('table.gridlist');

const headerPadding = table.querySelector('td');
const queuePointsHeader = document.createElement('td');
queuePointsHeader.classList.add('header');
queuePointsHeader.innerHTML = '<a>Poäng</a>';
headerPadding.insertAdjacentElement('afterend', queuePointsHeader);

table.querySelectorAll('td.header')[5].firstElementChild.innerText = 'Yta';

const headerElementBefore = table.querySelectorAll('td.header')[6];
headerElementBefore.firstElementChild.innerText = 'Hyra';

const newHeaderElement = document.createElement('td');
newHeaderElement.classList.add('header');
newHeaderElement.style.textAlign = 'right';
newHeaderElement.innerHTML = '<a>kr/m2</a>';
headerElementBefore.insertAdjacentElement('afterend', newHeaderElement);

const rows = table.querySelectorAll('tr:not(:first-child)');
for (const row of rows) {
    const columns = row.querySelectorAll('td');

    const firstElement = columns[0];
    const queueText = firstElement.lastElementChild.title;
    console.log('Title:', queueText);
    const queuePoints = queueText.match(/\d+/)?.[0];
    console.log('Points:', queuePoints);
    queuePointsElement = document.createElement('td');
    queuePointsElement.classList.add('gridcell');
    queuePointsElement.innerHTML = `<span>${queuePoints}</span>`;
    queuePointsElement.style.textAlign = 'center';
    firstElement.insertAdjacentElement('afterend', queuePointsElement);

    const areaText = columns[4].firstElementChild.innerText;
    const area = parseInt(areaText);

    const rentElement = columns[5];
    const rentText = rentElement.firstElementChild.innerText;
    const rent = parseInt(rentText.replace(/\s/g, ''));

    const rentPerArea = Math.round(rent / area);
    const rentPerAreaElement = document.createElement('td');
    rentPerAreaElement.classList.add('gridcell');
    rentPerAreaElement.style.textAlign = 'right';
    rentPerAreaElement.innerHTML = `<span>${rentPerArea}</span>`
    rentElement.insertAdjacentElement('afterend', rentPerAreaElement);
}
