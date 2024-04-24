import './FunctionalHarmony.css'
import { useState } from 'react'
import FunctionalHarmonySelecter from '../../Components/FunctionalHarmonySelecter/FunctionalHarmonySelecter'
import FunctionalHarmonyDisplay from '../../Components/FunctionalHarmonyDisplay/FunctionalHarmonyDisplay'
import {
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
    numberOfSharpsFlats,
    majorModes,
    minorModes,
    majorRomanNumerals,
    minorRomanNumerals,
    majorChords,
    minorChords
} from '../../Utils/ScaleshordsArray'

const FunctionalHarmony = () => {
    const [sharpsFlats, setSharpsFlats] = useState('Sharps')
    const [number, setNumber] = useState('0')

    function getMinor(key) {
        minorScale = key.slice(5, 7).concat(key.slice(0, 5))
    }

    let majorScale = cMajor;
    let minorScale = cMajor.slice(5, 7).concat(cMajor.slice(0, 5));

    function keysInDropdown() {
        if (number === '0') {
            majorScale = cMajor;
            getMinor(cMajor)
        } else if (number === '1' && sharpsFlats === 'Sharps') {
            majorScale = gMajor;
            getMinor(gMajor)
        } else if (number === '1' && sharpsFlats === 'Flats') {
            majorScale = fMajor;
            getMinor(fMajor)
        } else if (number === '2' && sharpsFlats === 'Sharps') {
            majorScale = dMajor;
            getMinor(dMajor)
        } else if (number === '2' && sharpsFlats === 'Flats') {
            majorScale = bbMajor;
            getMinor(bbMajor)
        } else if (number === '3' && sharpsFlats === 'Sharps') {
            majorScale = aMajor;
            getMinor(aMajor)
        } else if (number === '3' && sharpsFlats === 'Flats') {
            majorScale = ebMajor;
            getMinor(ebMajor)
        } else if (number === '4' && sharpsFlats === 'Sharps') {
            majorScale = eMajor;
            getMinor(eMajor)
        } else if (number === '4' && sharpsFlats === 'Flats') {
            majorScale = abMajor;
            getMinor(abMajor)
        } else if (number === '5' && sharpsFlats === 'Sharps') {
            majorScale = bMajor;
            getMinor(bMajor)
        } else if (number === '5' && sharpsFlats === 'Flats') {
            majorScale = dbMajor;
            getMinor(dbMajor)
        } else if (number === '6' && sharpsFlats === 'Sharps') {
            majorScale = fSharpMajor;
            getMinor(fSharpMajor)
        } else if (number === '6' && sharpsFlats === 'Flats') {
            majorScale = gbMajor;
            getMinor(gbMajor)
        } else if (number === '7' && sharpsFlats === 'Sharps') {
            majorScale = cSharpMajor;
            getMinor(cSharpMajor)
        } else if (number === '7' && sharpsFlats === 'Flats') {
            majorScale = cbMajor;
            getMinor(cbMajor)
        }
    }

    keysInDropdown()

    // handles on change events
    const handleSharpFlatChange = (e) => {
        setSharpsFlats(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    return (
        <>
            <FunctionalHarmonySelecter props={{ sharpsFlats, setSharpsFlats, number, setNumber, majorScale, minorScale, handleSharpFlatChange, handleNumberChange, numberOfSharpsFlats }} />
            <FunctionalHarmonyDisplay props={{ majorScale, minorScale, majorModes, majorRomanNumerals, majorChords, minorChords, minorRomanNumerals, minorModes }} />
        </>
    )
}

export default FunctionalHarmony