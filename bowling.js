function countFrame(frameNumber, pins) {
  var score = 0

  if (pins.length == 0)
    return score

  if (pins[0] == 10) {
    score = pins[0] + (pins.length > 1 ? pins[1] : 0) + (pins.length > 2 ? pins[2] : 0)
    pins = frameNumber == 10 ? [] : pins.splice(1)
  }
  else if (pins[0] + pins[1] == 10) {
    score = pins[0] + pins[1] + pins[2]
    pins = pins.splice(2)
  }
  else {
    score = pins[0] + pins[1]
    pins = pins.splice(2)
  }

  return score + countFrame(frameNumber + 1, pins)
}

function equals(actual, expected) {
  var isEqual = (actual === expected)
  console.log((isEqual ? 'OK' : 'FAIL') + ' (got ' + actual + ', expected ' + expected + ')')
  return isEqual
}

var zeros = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0]

var ones = [
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 1, 1]

var spare = [
  5, 5, 3, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0]

var strike = [
  10,   3, 4,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0]

var perfect = [
  10,   10,
  10,   10,
  10,   10,
  10,   10,
  10,   10,
  10,   10]

var total = countFrame.bind(undefined, 1)

process.exit(
     equals(total(zeros),   0)
  && equals(total(ones),    20)
  && equals(total(spare),   16)
  && equals(total(strike),  24)
  && equals(total(perfect), 300)
       ? 0 : 1)
