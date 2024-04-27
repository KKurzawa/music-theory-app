import './ChordProgressions.css'
import { useState } from 'react'
import FunctionalHarmonySelecter from '../../Components/FunctionalHarmonySelecter/FunctionalHarmonySelecter'
import MajorTwoFiveOne from '../../Components/MajorTwoFiveOne/MajorTwoFiveOne'
import MinorTwoFiveOne from '../../Components/MinorTwoFiveOne/MinorTwoFiveOne'
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
    numberOfSharpsOrFlats,
    majorRomanNumerals,
    minorRomanNumerals,
    majorChords,
    minorChords
} from '../../Utils/ScaleshordsArray'

const ChordProgressions = () => {
    const [sharpsFlats, setSharpsFlats] = useState('sharps')
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
        } else if (number === '1' && sharpsFlats === 'sharps') {
            majorScale = gMajor;
            getMinor(gMajor)
        } else if (number === '1' && sharpsFlats === 'flats') {
            majorScale = fMajor;
            getMinor(fMajor)
        } else if (number === '2' && sharpsFlats === 'sharps') {
            majorScale = dMajor;
            getMinor(dMajor)
        } else if (number === '2' && sharpsFlats === 'flats') {
            majorScale = bbMajor;
            getMinor(bbMajor)
        } else if (number === '3' && sharpsFlats === 'sharps') {
            majorScale = aMajor;
            getMinor(aMajor)
        } else if (number === '3' && sharpsFlats === 'flats') {
            majorScale = ebMajor;
            getMinor(ebMajor)
        } else if (number === '4' && sharpsFlats === 'sharps') {
            majorScale = eMajor;
            getMinor(eMajor)
        } else if (number === '4' && sharpsFlats === 'flats') {
            majorScale = abMajor;
            getMinor(abMajor)
        } else if (number === '5' && sharpsFlats === 'sharps') {
            majorScale = bMajor;
            getMinor(bMajor)
        } else if (number === '5' && sharpsFlats === 'flats') {
            majorScale = dbMajor;
            getMinor(dbMajor)
        } else if (number === '6' && sharpsFlats === 'sharps') {
            majorScale = fSharpMajor;
            getMinor(fSharpMajor)
        } else if (number === '6' && sharpsFlats === 'flats') {
            majorScale = gbMajor;
            getMinor(gbMajor)
        } else if (number === '7' && sharpsFlats === 'sharps') {
            majorScale = cSharpMajor;
            getMinor(cSharpMajor)
        } else if (number === '7' && sharpsFlats === 'flats') {
            majorScale = cbMajor;
            getMinor(cbMajor)
        }
    }

    keysInDropdown()

    return (
        <>
            <FunctionalHarmonySelecter props={{ sharpsFlats, setSharpsFlats, number, setNumber, majorScale, minorScale, numberOfSharpsOrFlats }} />
            <MajorTwoFiveOne props={{ majorScale, majorChords, majorRomanNumerals }} />
            <MinorTwoFiveOne props={{ minorScale, minorChords, minorRomanNumerals }} />
        </>
    )
}

export default ChordProgressions