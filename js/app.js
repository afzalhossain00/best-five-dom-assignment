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
        const displayName = playerNamesArray[i].names;
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
    return selectPlayerNumber;
}

// calculate player expenses
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayer = document.getElementById('add-players');
    const playersNumber = perPlayer.children.length;
    const perPlayerBudget = getInputFieldValueById('per-player-budget');
    const selectPlayerCalculate = perPlayerBudget * playersNumber;
    setElementValueById('player-expenses', selectPlayerCalculate);
    return selectPlayerCalculate;
});

// calculate total cost
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerBudget = getInputFieldValueById('manager-budget');
    const coachBudget = getInputFieldValueById('coach-budget');
    if (Number.isNaN(managerBudget && coachBudget)) {
        alert('Please provide a valid number');
        return;
    }
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesValueString = playerExpenses.innerText;
    const playerExpensesValueNumber = parseFloat(playerExpensesValueString);

    const totalCost = coachBudget + managerBudget + playerExpensesValueNumber;
    setElementValueById('total-expense', totalCost);
    return totalCost;
});