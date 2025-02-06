console.log(data);
function getImageUrl(i) {
    return data[i].sprites.other['official-artwork'].front_default;
}

/*
<ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
*/
function createCardText(i) {
    const cardText = document.createElement('ul');
    cardText.className = 'card--text';

    const hp = document.createElement('li');
    hp.textContent = `HP: ${data[i].stats[0].base_stat}`;
    cardText.appendChild(hp);

    const attack = document.createElement('li');
    attack.textContent = `ATTACK: ${data[i].stats[1].base_stat}`;
    cardText.appendChild(attack);

    const defense = document.createElement('li');
    defense.textContent = `DEFENSE: ${data[i].stats[2].base_stat}`;
    cardText.appendChild(defense);

    const specialAttack = document.createElement('li');
    specialAttack.textContent = `SPECIAL-ATTACK: ${data[i].stats[3].base_stat}`;
    cardText.appendChild(specialAttack);

    const specialDefense = document.createElement('li');
    specialDefense.textContent = `SPECIAL-DEFENSE: ${data[i].stats[4].base_stat}`;
    cardText.appendChild(specialDefense);

    const speed = document.createElement('li');
    speed.textContent = `SPEED: ${data[i].stats[5].base_stat}`;
    cardText.appendChild(speed);

    return cardText;
}

function createPokemonCard(i) {
    const card = document.createElement('li');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = getImageUrl(i);
    card.appendChild(img);

    const cardText = createCardText(i);
    card.appendChild(cardText);

    return card;
}
const list = document.querySelector('ul');

for (let i = 0; i < data.length; i++) {
    const card = createPokemonCard(i);
    list.appendChild(card);
}
