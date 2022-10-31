let tiles = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let tilesWrapper = document.getElementById('tilesWrapper');

tiles.forEach(e => {
  tilesWrapper.innerHTML += '<span data-tile='+e+'>'+e+'</span>'
})

let shuffleTiles = () => {
    tilesWrapper.innerHTML = ''
    for (let i = tiles.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = tiles[i];
        tiles[i] = tiles[j];
        tiles[j] = temp;
        appendTiles(tiles[i])
    }
}

let sortTiles = () => {
    tilesWrapper.innerHTML = ''
    tiles = tiles.sort((a, b) => { return a - b });
    for (const element of tiles) {
        appendTiles(element)
    }
}

function appendTiles(element){
    let individualTile = document.createElement("span");
    individualTile.innerHTML = element
    individualTile.setAttribute('data-tile', element)
    tilesWrapper.appendChild(individualTile)
}
