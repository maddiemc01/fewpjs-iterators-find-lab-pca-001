const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(teamArray) {
  if (teamArray.find(team => team.result === "W")) {
    let win = (teamArray.find(team => team.result === "W"))
    return win.year
  } else {
    return undefined
  }
}