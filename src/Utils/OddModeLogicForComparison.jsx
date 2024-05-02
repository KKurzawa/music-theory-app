const alteredIonian = [
    'b9 Db and #9 Eb becomes 9 D',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added',
    'b7 Bb becomes 7 B'
]

const ionianAltered = [
    '9 D becomes b9 Db and #9 Eb',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    '13 A is removed',
    '7 B becomes 7 Bb'
]

const alteredDorian = [
    'b9 Db and #9 Eb becomes 9 D',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added'
]

const dorianAltered = [
    '9 D becomes b9 Db and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    '13 A is removed'
]

const alteredPhrygian = [
    '#9 Eb is removed',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    'b13 Ab is added'
]

const phrygianAltered = [
    '#9 Eb is added',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    'b13 Ab is removed'
]

const alteredLydian = [
    'b9 Db and #9 Eb becomes 9 D',
    '#11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added',
    'b7 Bb becomes 7 B'
]

const lydianAltered = [
    '9 D becomes Db b9 and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    'b13 Ab is removed'
]

const alteredMixolydian = [
    'b9 Db and #9 Eb becomes 9 D,',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added'
]

const mixolydianAltered = [
    '9 D becomes b9 Db and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5 Ab',
    'b13 Ab is removed'
]

const alteredAeolian = [
    'b9 Db and #9 Eb becomes 9 D',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    'b13 A is added'
]

const aeolianAltered = [
    '9 D becomes b9 Db and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    'b13 A is removed'
]

const alteredLocrian = [
    '#9 Eb is removed',
    '3 E becomes b3 Eb',
    '11 F is added',
    '#5 Ab is now considered b13'
]

const locrianAltered = [
    '#9 Eb is added',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    'b13 Ab is now considered #5'
]

const alteredHarmonicMinor = [
    'b9 Db and #9 Eb becomes 9 D',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    'b13 A is added',
    'b7 Bb becomes 7 B'
]

const harmonicMinorAltered = [
    '9 D becomes b9 Db and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    'b13 A is removed',
    '7 B becomes b7 Bb'
]


const alteredHarmonicDominant = [
    '#9 Eb is removed',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    'b13 A is added'
]

const harmonicDominantAltered = [
    '#9 Eb is added',
    '11 F is removed',
    '5 G becomes b5 Gb and #5 Ab',
    'b13 Ab is removed'
]

const alteredMelodicMinor = [
    'b9 Db and #9 Eb becomes 9 D',
    '3 E becomes b3 Eb',
    '11 F is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added',
    'b7 Bb becomes 7 B'
]

const melodicMinorAltered = [
    '9 D becomes b9 Db and #9 Eb',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    '5 G becomes b5 Gb and #5',
    '13 A is removed',
    '7 B becomes 7 Bb'
]

const alteredLydianDominant = [
    'b9 Db and #9 Eb becomes 9 D',
    '#11 F# is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added'
]

const lydianDominantAltered = [
    '9 D becomes b9 Db and #9 Eb',
    '11 F is removed',
    '5 G becomes b5 Gb and #5 Ab',
    'b13 Ab is removed'
]

const alteredLocrianTwo = [
    'b9 Db becomes 9 D',
    '#9 Eb is removed',
    '3 E becomes b3 Eb',
    '11 F is added',
    '#5 Ab is now considered b13'
]

const locrianTwoAltered = [
    '9 D becomes b9 Db',
    '#9 Eb is added',
    'b3 Eb becomes 3 E',
    '11 F is removed',
    'b13 Ab is now considered #5'
]

const alteredWholeTone = [
    'b9 Db and #9 Eb becomes 9 D',
]

const wholeToneAltered = [
    '9 D becomes b9 Db and #9 Eb'
]

const alteredHalfWholeDiminished = [
    '#11 F# is added',
    'b5 Gb and #5 Ab becomes 5 G',
    '13 A is added'
]

const halfWholeDiminishedAltered = [
    '#11 F# is removed',
    '5 G becomes b5 Gb and #5 Ab',
    '13 A is removed'
]

export {
    alteredIonian,
    ionianAltered,
    alteredDorian,
    dorianAltered,
    alteredPhrygian,
    phrygianAltered,
    alteredLydian,
    lydianAltered,
    alteredMixolydian,
    mixolydianAltered,
    alteredAeolian,
    aeolianAltered,
    alteredLocrian,
    locrianAltered,
    alteredHarmonicMinor,
    harmonicMinorAltered,
    alteredHarmonicDominant,
    harmonicDominantAltered,
    alteredMelodicMinor,
    melodicMinorAltered,
    alteredLydianDominant,
    lydianDominantAltered,
    alteredLocrianTwo,
    locrianTwoAltered,
    alteredWholeTone,
    wholeToneAltered,
    alteredHalfWholeDiminished,
    halfWholeDiminishedAltered
}
