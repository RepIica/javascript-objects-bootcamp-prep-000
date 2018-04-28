var playlist = { Deadmau5: "Strobe" }

function updatePlaylist(object, artist, title) {
  object[artist] = 
  return object
}

function removeFromPlaylist(object, artist) {
  var newObj = Object.assign({}, object)
  delete newObj.artist
  return newObj
}