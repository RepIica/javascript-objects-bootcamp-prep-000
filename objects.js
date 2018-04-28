var playlist = {Deadmau5: "Strobe"}

function updatePlaylist(object, artist, title) {
  return Object.assign({}, object, {[artist]: title})
}

function removePlaylist(object,  )