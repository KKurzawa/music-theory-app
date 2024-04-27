const cMajor = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const gMajor = ['G', 'A', 'B', 'C', 'D', 'E', 'F#']
const fMajor = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E']
const dMajor = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']
const bbMajor = ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
const aMajor = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
const ebMajor = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D']
const eMajor = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']
const abMajor = ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G']
const bMajor = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
const dbMajor = ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C']
const fSharpMajor = ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#']
const gbMajor = ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F']
const cSharpMajor = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#']
const cbMajor = ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']

const numberOfSharpsOrFlats = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
]

const majorModes = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian']
const minorModes = majorModes.slice(5, 7).concat(majorModes.slice(0, 5))

const majorRomanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii']
const minorRomanNumerals = ['i', 'ii', 'III', 'iv', 'v', 'VI', 'VII']

const majorChords = ['Maj7', 'm7', 'm7', 'Maj7(#11)', '7', 'm7', 'm7b5']
const minorChords = majorChords.slice(5, 7).concat(majorChords.slice(0, 5))

export {
    cMajor,
    gMajor,
    fMajor,
    dMajor,
    bbMajor,
    aMajor,
    ebMajor,
    eMajor,
    abMajor,
    bMajor,
    dbMajor,
    fSharpMajor,
    gbMajor,
    cSharpMajor,
    cbMajor,
    numberOfSharpsOrFlats,
    majorModes,
    minorModes,
    majorRomanNumerals,
    minorRomanNumerals,
    majorChords,
    minorChords
}