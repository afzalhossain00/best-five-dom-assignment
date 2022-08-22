
const playerNamesArray = [];
// Player selection
function addToClick(player) {

    const playerName = player.parentNode.parentNode.children[1].innerText;
    const playerNameList = {
        names: playerName
    };
    playerNamesArray.push(playerNameList);
    document.getElementById('total-player-added').innerText = playerNamesArray.length;

}