const cIonian = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const ionianChordTones = ['1', '9', '3', '11', '5', '13', '7']

// variables to get extension numbers
const ionianExtensionNumber = ['9', '11', '13']
const phrygianExtensionNumber = ionianExtensionNumber.map(number => number === '9' ? 'b9' :
    number === '13' ? 'b13' : number)
const lydianExtensionNumber = ionianExtensionNumber.map(number => number === '11' ? '#11' : number)
const aeolianExtensionNumber = ionianExtensionNumber.map(number => number === '13' ? 'b13' : number)
const alteredExtensionNumber = ['b9', '#9', 'b5', '#5']
const wholeToneExtensionNumber = lydianExtensionNumber.slice(0, 2)
const halfWholeDiminishedExtensionNumber = alteredExtensionNumber.slice(0, 2).concat(lydianExtensionNumber.slice(1, 3))


// variables to get modes and scale degree number 
const cLydian = cIonian.map(note => note === 'F' ? 'F#' : note)
const lydianChordTones = ionianChordTones.map(tone => tone === '11' ? '#11' : tone)

const cMixolydian = cIonian.map(note => note === 'B' ? 'Bb' : note)
const mixolydianChordTones = ionianChordTones.map(tone => tone === '7' ? 'b7' : tone)

const cMelodicMinor = cIonian.map(note => note === 'E' ? 'Eb' : note)
const melodicMinorChordTones = ionianChordTones.map(tone => tone === '3' ? 'b3' : tone)

const cHarmonicMinor = cMelodicMinor.map(note => note === 'A' ? 'Ab' : note)
const harmonicMinorChordTones = melodicMinorChordTones.map(tone => tone === '13' ? 'b13' : tone)

const cDorian = cMelodicMinor.map(note => note === 'B' ? 'Bb' : note)
const dorianChordTones = melodicMinorChordTones.map(tone => tone === '7' ? 'b7' : tone)

const cAeolian = cDorian.map(note => note === 'A' ? 'Ab' : note)
const aeolianChordTones = dorianChordTones.map(tone => tone === '13' ? 'b13' : tone)

const cPhrygian = cAeolian.map(note => note === 'D' ? 'Db' : note)
const phrygianChordTones = aeolianChordTones.map(tone => tone === '9' ? 'b9' : tone)

const cLocrian = cPhrygian.map(note => note === 'G' ? 'Gb' : note)
const locrianChordTones = phrygianChordTones.map(tone => tone === '5' ? 'b5' : tone)

const cHarmonicDominant = cPhrygian.map(note => note === 'Eb' ? 'E' : note)
const harmonicDominantChordTones = phrygianChordTones.map(tone => tone === 'b3' ? '3' : tone)

const cLydianDominant = cMixolydian.map(note => note === 'F' ? 'F#' : note)
const lydianDominantChordTones = mixolydianChordTones.map(tone => tone === '11' ? '#11' : tone)

const cLocrianTwo = cLocrian.map(note => note === 'Db' ? 'D' : note)
const locrianTwoChordTones = locrianChordTones.map(tone => tone === 'b9' ? '9' : tone)

const cAltered = cLocrian.map(note => note === 'F' ? 'E' : note)
const alteredChordTones = locrianChordTones.map(tone => tone === 'b3' ? '#9' : tone === '11' ? '3' : tone === 'b13' ? '#5' : tone)

const cWholeTone = cIonian.slice(0, 3).concat(cAltered.slice(4, 7))
const wholeToneChordTones = ionianChordTones.slice(0, 3).concat(alteredChordTones.slice(4, 7))

const cHalfWholeDiminished = cAltered.slice(0, 4).concat(cLydianDominant.slice(3, 7))
const halfWholeDiminishedChordTones = alteredChordTones.slice(0, 4).concat(lydianDominantChordTones.slice(3, 7))

// object for dropdown
const modeOptions = [
    { value: 'Ionian', label: 'Ionian' },
    { value: 'Dorian', label: 'Dorian' },
    { value: 'Phrygian', label: 'Phrygian' },
    { value: 'Lydian', label: 'Lydian' },
    { value: 'Mixolydian', label: 'Mixolydian' },
    { value: 'Aeolian', label: 'Aeolian' },
    { value: 'Locrian', label: 'Locrian' },
    { value: 'Harmonic Minor', label: 'Harmonic Minor' },
    { value: 'Harmonic Dominant', label: 'Harmonic Dominant' },
    { value: 'Melodic Minor', label: 'Melodic Minor' },
    { value: 'Altered', label: 'Altered' },
    { value: 'Lydian Dominant', label: 'Lydian Dominant' },
    { value: 'Locrian Two', label: 'Locrian Two' },
    { value: 'Whole Tone', label: 'Whole Tone' },
    { value: 'Half Whole Diminished', label: 'Half Whole Diminished' },
]

export {
    cIonian,
    ionianChordTones,
    cLydian,
    lydianChordTones,
    cMixolydian,
    mixolydianChordTones,
    cMelodicMinor,
    melodicMinorChordTones,
    cHarmonicMinor,
    harmonicMinorChordTones,
    cDorian,
    dorianChordTones,
    cAeolian,
    aeolianChordTones,
    cPhrygian,
    phrygianChordTones,
    cLocrian,
    locrianChordTones,
    cHarmonicDominant,
    harmonicDominantChordTones,
    cLydianDominant,
    lydianDominantChordTones,
    cLocrianTwo,
    locrianTwoChordTones,
    cAltered,
    alteredChordTones,
    cWholeTone,
    wholeToneChordTones,
    cHalfWholeDiminished,
    halfWholeDiminishedChordTones,
    ionianExtensionNumber,
    phrygianExtensionNumber,
    lydianExtensionNumber,
    aeolianExtensionNumber,
    alteredExtensionNumber,
    wholeToneExtensionNumber,
    halfWholeDiminishedExtensionNumber,
    modeOptions
}