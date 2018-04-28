var playlist = {Deadmau5: "Strobe"}

function updatePlaylist(object, artist, title) {
  return Object.assign({}, {[artist]: title})
}