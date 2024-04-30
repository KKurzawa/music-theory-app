import './ModesInParallel.css'
import ModeSelector from '../../Components/ModeSelector/ModeSelector'
import ModesInParellelDisplay from '../../Components/ModesInParellelDisplay/ModesInParellelDisplay'
import { useState } from 'react'
import {
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
} from '../../Utils/ModesArray'

const ModesInParallel = () => {
    let [modeOne, setModeOne] = useState('Ionian')
    let [modeTwo, setModeTwo] = useState('Ionian')

    function getSelectedModeOne() {
        if (modeOne === 'Dorian') {
            modeOneToMap = cDorian
            modeOneChordTonesToMap = dorianChordTones
        } else if (modeOne === 'Phrygian') {
            modeOneToMap = cPhrygian
            modeOneChordTonesToMap = phrygianChordTones
        } else if (modeOne === 'Lydian') {
            modeOneToMap = cLydian
            modeOneChordTonesToMap = lydianChordTones
        } else if (modeOne === 'Mixolydian') {
            modeOneToMap = cMixolydian
            modeOneChordTonesToMap = mixolydianChordTones
        } else if (modeOne === 'Aeolian') {
            modeOneToMap = cAeolian
            modeOneChordTonesToMap = aeolianChordTones
        } else if (modeOne === 'Locrian') {
            modeOneToMap = cLocrian
            modeOneChordTonesToMap = locrianChordTones
        } else if (modeOne === 'Harmonic Minor') {
            modeOneToMap = cHarmonicMinor
            modeOneChordTonesToMap = harmonicMinorChordTones
        } else if (modeOne === 'Harmonic Dominant') {
            modeOneToMap = cHarmonicDominant
            modeOneChordTonesToMap = harmonicDominantChordTones
        } else if (modeOne === 'Melodic Minor') {
            modeOneToMap = cMelodicMinor
            modeOneChordTonesToMap = melodicMinorChordTones
        } else if (modeOne === 'Altered') {
            modeOneToMap = cAltered
            modeOneChordTonesToMap = alteredChordTones
        } else if (modeOne === 'Lydian Dominant') {
            modeOneToMap = cLydianDominant
            modeOneChordTonesToMap = lydianDominantChordTones
        } else if (modeOne === 'Locrian Two') {
            modeOneToMap = cLocrianTwo
            modeOneChordTonesToMap = locrianTwoChordTones
        } else if (modeOne === 'Whole Tone') {
            modeOneToMap = cWholeTone
            modeOneChordTonesToMap = wholeToneChordTones
        } else if (modeOne === 'Half Whole Diminished') {
            modeOneToMap = cHalfWholeDiminished
            modeOneChordTonesToMap = halfWholeDiminishedChordTones
        } else {
            modeOneToMap = cIonian
            modeOneChordTonesToMap = ionianChordTones
        }
    }


    function getSelectedModeTwo() {
        if (modeTwo === 'Dorian') {
            modeTwoToMap = cDorian
            modeTwoChordTonesToMap = dorianChordTones
        } else if (modeTwo === 'Phrygian') {
            modeTwoToMap = cPhrygian
            modeTwoChordTonesToMap = phrygianChordTones
        } else if (modeTwo === 'Lydian') {
            modeTwoToMap = cLydian
            modeTwoChordTonesToMap = lydianChordTones
        } else if (modeTwo === 'Mixolydian') {
            modeTwoToMap = cMixolydian
            modeTwoChordTonesToMap = mixolydianChordTones
        } else if (modeTwo === 'Aeolian') {
            modeTwoToMap = cAeolian
            modeTwoChordTonesToMap = aeolianChordTones
        } else if (modeTwo === 'Locrian') {
            modeTwoToMap = cLocrian
            modeTwoChordTonesToMap = locrianChordTones
        } else if (modeTwo === 'Harmonic Minor') {
            modeTwoToMap = cHarmonicMinor
            modeTwoChordTonesToMap = harmonicMinorChordTones
        } else if (modeTwo === 'Harmonic Dominant') {
            modeTwoToMap = cHarmonicDominant
            modeTwoChordTonesToMap = harmonicDominantChordTones
        } else if (modeTwo === 'Melodic Minor') {
            modeTwoToMap = cMelodicMinor
            modeTwoChordTonesToMap = melodicMinorChordTones
        } else if (modeTwo === 'Altered') {
            modeTwoToMap = cAltered
            modeTwoChordTonesToMap = alteredChordTones
        } else if (modeTwo === 'Lydian Dominant') {
            modeTwoToMap = cLydianDominant
            modeTwoChordTonesToMap = lydianDominantChordTones
        } else if (modeTwo === 'Locrian Two') {
            modeTwoToMap = cLocrianTwo
            modeTwoChordTonesToMap = locrianTwoChordTones
        } else if (modeTwo === 'Whole Tone') {
            modeTwoToMap = cWholeTone
            modeTwoChordTonesToMap = wholeToneChordTones
        } else if (modeTwo === 'Half Whole Diminished') {
            modeTwoToMap = cHalfWholeDiminished
            modeTwoChordTonesToMap = halfWholeDiminishedChordTones
        } else {
            modeTwoToMap = cIonian
            modeTwoChordTonesToMap = ionianChordTones
        }
    }

    let modeOneToMap = [cIonian]
    let modeTwoToMap = [cIonian]

    let modeOneChordTonesToMap = [ionianChordTones]
    let modeTwoChordTonesToMap = [ionianChordTones]

    getSelectedModeOne();
    getSelectedModeTwo();

    let seventhChordOne = []
    let seventhChordTwo = []

    let extensionsOne = []
    let extensionsTwo = []

    let seventhChordOneTones = []
    let seventhChordTwoTones = []

    let chordOneName = 'Maj7'
    let chordTwoName = 'Maj7'

    let extensionChordOne = 'Dm'
    let extensionChordTwo = 'Dm'

    let extensionNumberOne = ionianExtensionNumber
    let extensionNumberTwo = ionianExtensionNumber

    function getSeventhChordOne() {
        seventhChordOne = []
        if (modeOne === 'Whole Tone') {
            seventhChordOne = ['C', 'E', 'Ab', 'Bb']
        } else if (modeOne === 'Altered') {
            seventhChordOne = ['C', 'E', 'Bb']
        } else if (modeOne === 'Half Whole Diminished') {
            seventhChordOne = ['C', 'E', 'G', 'Bb']
        } else {
            for (let i = 0; i < modeOneToMap.length; i++) {
                if (i % 2 === 0) {
                    seventhChordOne.push(modeOneToMap[i])
                }
            }
        }
    }

    function getExtensionsOne() {
        extensionsOne = []
        if (modeOne === 'Whole Tone') {
            extensionsOne = ['D', 'Gb']
        } else if (modeOne === 'Altered') {
            extensionsOne = ['Db', 'Eb', 'Gb', 'Ab']
        } else if (modeOne === 'Half Whole Diminished') {
            extensionsOne = ['Db', 'Eb', 'F#', 'A']
        } else {
            for (let i = 0; i < modeOneToMap.length; i++) {
                if (i % 2 !== 0) {
                    extensionsOne.push(modeOneToMap[i])
                }
            }
        }
    }

    function getExtensionNumbersOne() {
        modeOne === 'Phrygian' || modeOne === 'Locrian' || modeOne === 'Harmonic Dominant' ? extensionNumberOne = phrygianExtensionNumber :
            modeOne === 'Aeolian' || modeOne === 'Harmonic Minor' || modeOne === 'Locrian Two' ? extensionNumberOne = aeolianExtensionNumber :
                modeOne === 'Whole Tone' ? extensionNumberOne = wholeToneExtensionNumber :
                    modeOne === 'Half Whole Diminished' ? extensionNumberOne = halfWholeDiminishedExtensionNumber :
                        modeOne === 'Altered' ? extensionNumberOne = alteredExtensionNumber :
                            modeOne === 'Lydian' || modeOne === 'Lydian Dominant' ? extensionNumberOne = lydianExtensionNumber :
                                extensionNumberOne = ionianExtensionNumber
    }

    function getSeventhChordTwo() {
        seventhChordTwo = []
        if (modeTwo === 'Whole Tone') {
            seventhChordTwo = ['C', 'E', 'Ab', 'Bb']
        } else if (modeTwo === 'Altered') {
            seventhChordTwo = ['C', 'E', 'Bb']
        } else if (modeOne === 'Half Whole Diminished') {
            seventhChordTwo = ['C', 'E', 'G', 'Bb']
        } else {
            for (let i = 0; i < modeTwoToMap.length; i++) {
                if (i % 2 === 0) {
                    seventhChordTwo.push(modeTwoToMap[i])
                }
            }
        }
    }

    function getExtensionsTwo() {
        extensionsTwo = []
        if (modeTwo === 'Whole Tone') {
            extensionsTwo = ['D', 'Gb']
        } else if (modeTwo === 'Altered') {
            extensionsTwo = ['Db', 'Eb', 'Gb', 'Ab']
        } else if (modeTwo === 'Half Whole Diminished') {
            extensionsTwo = ['Db', 'Eb', 'F#', 'A']
        } else {
            for (let i = 0; i < modeTwoToMap.length; i++) {
                if (i % 2 !== 0) {
                    extensionsTwo.push(modeTwoToMap[i])
                }
            }
        }
    }

    function getExtensionNumbersTwo() {
        modeTwo === 'Phrygian' || modeTwo === 'Locrian' || modeTwo === 'Harmonic Dominant' ? extensionNumberTwo = phrygianExtensionNumber :
            modeTwo === 'Aeolian' || modeTwo === 'Harmonic Minor' || modeTwo === 'Locrian Two' ? extensionNumberTwo = aeolianExtensionNumber :
                modeTwo === 'Whole Tone' ? extensionNumberTwo = wholeToneExtensionNumber :
                    modeTwo === 'Half Whole Diminished' ? extensionNumberTwo = halfWholeDiminishedExtensionNumber :
                        modeTwo === 'Altered' ? extensionNumberTwo = alteredExtensionNumber :
                            modeTwo === 'Lydian' || modeTwo === 'Lydian Dominant' ? extensionNumberTwo = lydianExtensionNumber :
                                extensionNumberTwo = ionianExtensionNumber
    }

    getSeventhChordOne()
    getExtensionsOne()
    getSeventhChordTwo()
    getExtensionsTwo()
    getExtensionNumbersOne()
    getExtensionNumbersTwo()

    function getChordOneName() {
        modeOne === 'Dorian' || modeOne === 'Phrygian' || modeOne === 'Aeolian' ? chordOneName = 'm7' :
            modeOne === 'Harmonic Minor' || modeOne === 'Melodic Minor' ? chordOneName = 'm(maj7)' :
                modeOne === 'Ionian' ? chordOneName = 'Maj7' :
                    modeOne === 'Lydian' ? chordOneName = 'Maj7#11' :
                        modeOne === 'Mixolydian' || modeOne === 'Half Whole Diminished' ? chordOneName = '7' :
                            modeOne === 'Lydian Dominant' ? chordOneName = '7#11' :
                                modeOne === 'Harmonic Dominant' ? chordOneName = '7(b9b13)' :
                                    modeOne === 'Altered' ? chordOneName = '7alt' :
                                        modeOne === 'Whole Tone' ? chordOneName = '7#5' :
                                            chordOneName = 'm7b5'
    }

    function getExtensionChordNameOne() {
        modeOne === 'Whole Tone' ? extensionChordOne = 'Not a chord' :
            modeOne === 'Altered' ? extensionChordOne = 'Db9(sus4)' :
                modeOne === 'Lydian Dominant' || modeOne === 'Lydian' ? extensionChordOne = 'D' :
                    modeOne === 'Half Whole Diminished' ? extensionChordOne = 'Db9#5(sus4)' :
                        modeOne === 'Phrygian' || modeOne === 'Locrian' || modeOne === 'Harmonic Dominant' ? extensionChordOne = 'Db' :
                            modeOne === 'Half Whole Diminished' ? extensionChordOne = 'D' :
                                modeOne === 'Aeolian' || modeOne === 'Harmonic Minor' || modeOne === 'Locrian Two' ? extensionChordOne = 'Ddim' :
                                    extensionChordOne = 'Dm'

    }

    function getChordTwoName() {
        modeTwo === 'Dorian' || modeTwo === 'Phrygian' || modeTwo === 'Aeolian' ? chordTwoName = 'm7' :
            modeTwo === 'Harmonic Minor' || modeTwo === 'Melodic Minor' ? chordTwoName = 'm(maj7)' :
                modeTwo === 'Ionian' ? chordTwoName = 'Maj7' :
                    modeTwo === 'Lydian' ? chordTwoName = 'Maj7#11' :
                        modeTwo === 'Mixolydian' || modeTwo === 'Half Whole Diminished' ? chordTwoName = '7' :
                            modeTwo === 'Lydian Dominant' ? chordTwoName = '7#11' :
                                modeTwo === 'Harmonic Dominant' ? chordTwoName = '7(b9b13)' :
                                    modeTwo === 'Altered' ? chordTwoName = '7alt' :
                                        modeTwo === 'Whole Tone' ? chordTwoName = '7#5' :
                                            chordTwoName = 'm7b5'
    }

    function getExtensionChordNameTwo() {
        modeTwo === 'Whole Tone' ? extensionChordTwo = 'Not a chord' :
            modeTwo === 'Altered' ? extensionChordTwo = 'Db9(sus4)' :
                modeTwo === 'Lydian Dominant' || modeTwo === 'Lydian' ? extensionChordTwo = 'D' :
                    modeTwo === 'Half Whole Diminished' ? extensionChordTwo = 'Db9#5(sus4)' :
                        modeTwo === 'Phrygian' || modeTwo === 'Locrian' || modeTwo === 'Harmonic Dominant' ? extensionChordTwo = 'Db' :
                            modeTwo === 'Half Whole Diminished' ? extensionChordTwo = 'D' :
                                modeTwo === 'Aeolian' || modeTwo === 'Harmonic Minor' || modeTwo === 'Locrian Two' ? extensionChordTwo = 'Ddim' :
                                    extensionChordTwo = 'Dm'

    }

    getChordOneName()
    getChordTwoName()
    getExtensionChordNameOne()
    getExtensionChordNameTwo()

    function getSeventhChordOneTones() {
        seventhChordOneTones.push('1')
        seventhChordOne[1] === 'E' ? seventhChordOneTones.push('3') : seventhChordOneTones.push('b3')
        seventhChordOne[2] === 'G' ? seventhChordOneTones.push('5') : seventhChordOne[2] === 'Ab' ? seventhChordOneTones.push('#5') : seventhChordOneTones.push('b5')
        seventhChordOne[3] === 'B' ? seventhChordOneTones.push('7') : seventhChordOne[3] === 'A' ? seventhChordOneTones.push('bb7') : seventhChordOneTones.push('b7')
    }

    function getSeventhChordTwoTones() {
        seventhChordTwoTones.push('1')
        seventhChordTwo[1] === 'E' ? seventhChordTwoTones.push('3') : seventhChordTwoTones.push('b3')
        seventhChordTwo[2] === 'G' ? seventhChordTwoTones.push('5') : seventhChordTwo[2] === 'Ab' ? seventhChordTwoTones.push('#5') : seventhChordTwoTones.push('b5')
        seventhChordTwo[3] === 'B' ? seventhChordTwoTones.push('7') : seventhChordTwo[3] === 'A' ? seventhChordTwoTones.push('bb7') : seventhChordTwoTones.push('b7')
    }

    getSeventhChordOneTones()
    getSeventhChordTwoTones()

    return (
        <main>
            <ModeSelector props={{ modeOne, setModeOne, modeTwo, setModeTwo }} />
            <ModesInParellelDisplay props={{ modeOne, modeTwo, modeOneToMap, modeTwoToMap, modeOneChordTonesToMap, modeTwoChordTonesToMap, seventhChordOne, seventhChordTwo, seventhChordOneTones, seventhChordTwoTones, chordOneName, chordTwoName, extensionsOne, extensionsTwo, extensionChordOne, extensionChordTwo, extensionNumberOne, extensionNumberTwo }} />
        </main>

    )
}

export default ModesInParallel