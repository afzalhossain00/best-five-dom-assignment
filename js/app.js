
const playerNamesArray = [];
// Player selection
function addToClick(player) {

    const playerName = player.parentNode.parentNode.children[1].innerText;
    const playerNameList = {
        names: playerName
    };
    playerNamesArray.push(playerNameList);
    playerListDisplay(playerNamesArray);
    player.disabled = true;
    player.style.backgroundColor = 'gray';
}

// display in table
function playerListDisplay(slectedPlayer) {
    const slectedPlayerList = document.getElementById('add-players');
    slectedPlayerList.innerHTML = '';

    for (let i = 0; i < slectedPlayer.length; i++) {
        const displayName = playerNamesArray[i].names
        const tr = document.createElement('tr');
        if (i > 4) {
            alert('You can not select more than five players');
            player.disabled = false;
            return;
        }
        tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${displayName}</td>
                `;
        slectedPlayerList.appendChild(tr);

    }
    const selectPlayerNumber = document.getElementById('total-player-added').innerText = playerNamesArray.length;
    console.log(selectPlayerNumber);
    return selectPlayerNumber;

}

document.getElementById('btn-calculate').addEventListener('click', function () {
    const selectPlayerAmount = getInputFieldValueById('per-player-budget')
    const selectPlayerNumber = playerNamesArray.length;
    const selectPlayerCalculate = selectPlayerAmount * selectPlayerNumber;
    setElementValueById('player-expenses', selectPlayerCalculate);
});