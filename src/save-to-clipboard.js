/* eslint-disable eqeqeq */

function ensureStringEndsWithNewline (string) {
  return string.charAt(string.length - 1) != '\n' ? string + '\n' : string
}

function saveToClipboard (string) {
  const pasteBoard = NSPasteboard.generalPasteboard()
  pasteBoard.clearContents()
  pasteBoard.setString_forType(
    ensureStringEndsWithNewline(string),
    NSStringPboardType
  )
}

module.exports = saveToClipboard
