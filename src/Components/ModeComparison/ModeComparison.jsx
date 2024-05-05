import './ModeComparison.css'
import {
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
    halfWholeDiminishedAltered,
    wholeToneIonian,
    ionianWholeTone,
    wholeToneDorian,
    dorianWholeTone,
    wholeTonePhrygian,
    phrygianWholeTone,
    wholeToneLydian,
    lydianWholeTone,
    wholeToneMixolydian,
    mixolydianWholeTone,
    wholeToneAeolian,
    aeolianWholeTone,
    wholeToneLocrian,
    locrianWholeTone,
    wholeToneHarmonicMinor,
    harmonicMinorWholeTone,
    wholeToneHarmonicDominant,
    harmonicDominantWholeTone,
    wholeToneMelodicMinor,
    melodicMinorWholeTone,
    wholeToneLydianDominant,
    lydianDominantWholeTone,
    wholeToneLocrianTwo,
    locrianTwoWholeTone,
    wholeToneHalfWholeDiminished,
    halfWholeDiminishedWholeTone,
    halfWholeDiminishedIonian,
    ionianHalfWholeDiminished,
    halfWholeDiminishedDorian,
    dorianHalfWholeDiminished,
    halfWholeDiminishedPhrygian,
    phrygianHalfWholeDiminished,
    halfWholeDiminishedLydian,
    lydianHalfWholeDiminished,
    halfWholeDiminishedMixolydian,
    mixolydianHalfWholeDiminished,
    halfWholeDiminishedAeolian,
    aeolianHalfWholeDiminished,
    halfWholeDiminishedLocrian,
    locrianHalfWholeDiminished,
    halfWholeDiminishedHarmonicMinor,
    harmonicMinorHalfWholeDiminished,
    halfWholeDiminishedHarmonicDominant,
    harmonicDominantHalfWholeDiminished,
    halfWholeDiminishedMelodicMinor,
    melodicMinorHalfWholeDiminished,
    halfWholeDiminishedLydianDominant,
    lydianDominantHalfWholeDiminished,
    locrianTwoHalfWholeDiminished,
    halfWholeDiminishedLocrianTwo
} from '../../Utils/OddModeLogicForComparison'

const ModeComparison = ({ props: { modeOne, modeTwo, modeOneDifferentNote, modeTwoDifferentNote } }) => {
    return (
        <main className='flex flex-col items-center'>
            <header>Converting C {modeOne} to C {modeTwo}</header>
            <ol className='flex flex-row'>
                <article className='flex flex-col text-center'>
                    {modeOneDifferentNote.length === 0 ? 'Change one or both of the modes to see them compared.' :
                        modeOne === 'Altered' && modeTwo === 'Ionian' ?
                            alteredIonian.map((string, index) => (
                                <li key={index}>{string}</li>
                            )) :
                            modeOne === 'Ionian' && modeTwo === 'Altered' ?
                                ionianAltered.map((string, index) => (
                                    <li key={index}>{string}</li>
                                )) :
                                modeOne === 'Altered' && modeTwo === 'Dorian' ?
                                    alteredDorian.map((string, index) => (
                                        <li key={index}>{string}</li>
                                    )) :
                                    modeOne === 'Dorian' && modeTwo === 'Altered' ?
                                        dorianAltered.map((string, index) => (
                                            <li key={index}>{string}</li>
                                        )) :
                                        modeOne === 'Altered' && modeTwo === 'Phrygian' ?
                                            alteredPhrygian.map((string, index) => (
                                                <li key={index}>{string}</li>
                                            )) :
                                            modeOne === 'Phrygian' && modeTwo === 'Altered' ?
                                                phrygianAltered.map((string, index) => (
                                                    <li key={index}>{string}</li>
                                                )) :
                                                modeOne === 'Altered' && modeTwo === 'Lydian' ?
                                                    alteredLydian.map((string, index) => (
                                                        <li key={index}>{string}</li>
                                                    )) :
                                                    modeOne === 'Lydian' && modeTwo === 'Altered' ?
                                                        lydianAltered.map((string, index) => (
                                                            <li key={index}>{string}</li>
                                                        )) :
                                                        modeOne === 'Altered' && modeTwo === 'Mixolydian' ?
                                                            alteredMixolydian.map((string, index) => (
                                                                <li key={index}>{string}</li>
                                                            )) :
                                                            modeOne === 'Mixolydian' && modeTwo === 'Altered' ?
                                                                mixolydianAltered.map((string, index) => (
                                                                    <li key={index}>{string}</li>
                                                                )) :
                                                                modeOne === 'Altered' && modeTwo === 'Aeolian' ?
                                                                    alteredAeolian.map((string, index) => (
                                                                        <li key={index}>{string}</li>
                                                                    )) :
                                                                    modeOne === 'Aeolian' && modeTwo === 'Altered' ?
                                                                        aeolianAltered.map((string, index) => (
                                                                            <li key={index}>{string}</li>
                                                                        )) :
                                                                        modeOne === 'Altered' && modeTwo === 'Locrian' ?
                                                                            alteredLocrian.map((string, index) => (
                                                                                <li key={index}>{string}</li>
                                                                            )) :
                                                                            modeOne === 'Locrian' && modeTwo === 'Altered' ?
                                                                                locrianAltered.map((string, index) => (
                                                                                    <li key={index}>{string}</li>
                                                                                )) :
                                                                                modeOne === 'Altered' && modeTwo === 'Harmonic Minor' ?
                                                                                    alteredHarmonicMinor.map((string, index) => (
                                                                                        <li key={index}>{string}</li>
                                                                                    )) :
                                                                                    modeOne === 'Harmonic Minor' && modeTwo === 'Altered' ?
                                                                                        harmonicMinorAltered.map((string, index) => (
                                                                                            <li key={index}>{string}</li>
                                                                                        )) :

                                                                                        modeOne === 'Altered' && modeTwo === 'Harmonic Dominant' ?
                                                                                            alteredHarmonicDominant.map((string, index) => (
                                                                                                <li key={index}>{string}</li>
                                                                                            )) :
                                                                                            modeOne === 'Harmonic Dominant' && modeTwo === 'Altered' ?
                                                                                                harmonicDominantAltered.map((string, index) => (
                                                                                                    <li key={index}>{string}</li>
                                                                                                )) :
                                                                                                modeOne === 'Altered' && modeTwo === 'Melodic Minor' ?
                                                                                                    alteredMelodicMinor.map((string, index) => (
                                                                                                        <li key={index}>{string}</li>
                                                                                                    )) :
                                                                                                    modeOne === 'Melodic Minor' && modeTwo === 'Altered' ?
                                                                                                        melodicMinorAltered.map((string, index) => (
                                                                                                            <li key={index}>{string}</li>
                                                                                                        )) :
                                                                                                        modeOne === 'Altered' && modeTwo === 'Lydian Dominant' ?
                                                                                                            alteredLydianDominant.map((string, index) => (
                                                                                                                <li key={index}>{string}</li>
                                                                                                            )) :
                                                                                                            modeOne === 'Lydian Dominant' && modeTwo === 'Altered' ?
                                                                                                                lydianDominantAltered.map((string, index) => (
                                                                                                                    <li key={index}>{string}</li>
                                                                                                                )) :
                                                                                                                modeOne === 'Altered' && modeTwo === 'Locrian Two' ?
                                                                                                                    alteredLocrianTwo.map((string, index) => (
                                                                                                                        <li key={index}>{string}</li>
                                                                                                                    )) :
                                                                                                                    modeOne === 'Locrian Two' && modeTwo === 'Altered' ?
                                                                                                                        locrianTwoAltered.map((string, index) => (
                                                                                                                            <li key={index}>{string}</li>
                                                                                                                        )) :
                                                                                                                        modeOne === 'Altered' && modeTwo === 'Whole Tone' ?
                                                                                                                            alteredWholeTone.map((string, index) => (
                                                                                                                                <li key={index}>{string}</li>
                                                                                                                            )) :
                                                                                                                            modeOne === 'Whole Tone' && modeTwo === 'Altered' ?
                                                                                                                                wholeToneAltered.map((string, index) => (
                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                )) :
                                                                                                                                modeOne === 'Altered' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                    alteredHalfWholeDiminished.map((string, index) => (
                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                    )) :
                                                                                                                                    modeOne === 'Half Whole Diminished' && modeTwo === 'Altered' ?
                                                                                                                                        halfWholeDiminishedAltered.map((string, index) => (
                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                        )) :
                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Ionian' ?
                                                                                                                                            wholeToneIonian.map((string, index) => (
                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                            )) :
                                                                                                                                            modeOne === 'Ionian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                ionianWholeTone.map((string, index) => (
                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                )) :
                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Dorian' ?
                                                                                                                                                    wholeToneDorian.map((string, index) => (
                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                    )) :
                                                                                                                                                    modeOne === 'Dorian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                        dorianWholeTone.map((string, index) => (
                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                        )) :
                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Phrygian' ?
                                                                                                                                                            wholeTonePhrygian.map((string, index) => (
                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                            )) :
                                                                                                                                                            modeOne === 'Phrygian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                phrygianWholeTone.map((string, index) => (
                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                )) :
                                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Lydian' ?
                                                                                                                                                                    wholeToneLydian.map((string, index) => (
                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                    )) :
                                                                                                                                                                    modeOne === 'Lydian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                        lydianWholeTone.map((string, index) => (
                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                        )) :
                                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Mixolydian' ?
                                                                                                                                                                            wholeToneMixolydian.map((string, index) => (
                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                            )) :
                                                                                                                                                                            modeOne === 'Mixolydian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                mixolydianWholeTone.map((string, index) => (
                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                )) :
                                                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Aeolian' ?
                                                                                                                                                                                    wholeToneAeolian.map((string, index) => (
                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                    )) :
                                                                                                                                                                                    modeOne === 'Aeolian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                        aeolianWholeTone.map((string, index) => (
                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                        )) :
                                                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Locrian' ?
                                                                                                                                                                                            wholeToneLocrian.map((string, index) => (
                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                            )) :
                                                                                                                                                                                            modeOne === 'Locrian' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                locrianWholeTone.map((string, index) => (
                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                )) :
                                                                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Harmonic Minor' ?
                                                                                                                                                                                                    wholeToneHarmonicMinor.map((string, index) => (
                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                    )) :
                                                                                                                                                                                                    modeOne === 'Harmonic Minor' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                        harmonicMinorWholeTone.map((string, index) => (
                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                        )) :
                                                                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Harmonic Dominant' ?
                                                                                                                                                                                                            wholeToneHarmonicDominant.map((string, index) => (
                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                            )) :
                                                                                                                                                                                                            modeOne === 'Harmonic Dominant' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                                harmonicDominantWholeTone.map((string, index) => (
                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Melodic Minor' ?
                                                                                                                                                                                                                    wholeToneMelodicMinor.map((string, index) => (
                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                    modeOne === 'Melodic Minor' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                                        melodicMinorWholeTone.map((string, index) => (
                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Lydian Dominant' ?
                                                                                                                                                                                                                            wholeToneLydianDominant.map((string, index) => (
                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                            modeOne === 'Lydian Dominant' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                                                lydianDominantWholeTone.map((string, index) => (
                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                modeOne === 'Whole Tone' && modeTwo === 'Locrian Two' ?
                                                                                                                                                                                                                                    wholeToneLocrianTwo.map((string, index) => (
                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                    modeOne === 'Locrian Two' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                                                        locrianTwoWholeTone.map((string, index) => (
                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                        modeOne === 'Whole Tone' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                            wholeToneHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                            modeOne === 'Half Whole Diminished' && modeTwo === 'Whole Tone' ?
                                                                                                                                                                                                                                                halfWholeDiminishedWholeTone.map((string, index) => (
                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Ionian' ?
                                                                                                                                                                                                                                                    halfWholeDiminishedIonian.map((string, index) => (
                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                    modeOne === 'Ionian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                        ionianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Dorian' ?
                                                                                                                                                                                                                                                            halfWholeDiminishedDorian.map((string, index) => (
                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                            modeOne === 'Dorian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                dorianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Phrygian' ?
                                                                                                                                                                                                                                                                    halfWholeDiminishedPhrygian.map((string, index) => (
                                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                                    modeOne === 'Phrygian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                        phrygianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Lydian' ?
                                                                                                                                                                                                                                                                            halfWholeDiminishedLydian.map((string, index) => (
                                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                                            modeOne === 'Lydian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                lydianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Mixolydian' ?
                                                                                                                                                                                                                                                                                    halfWholeDiminishedMixolydian.map((string, index) => (
                                                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                                                    modeOne === 'Mixolydian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                        mixolydianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Aeolian' ?
                                                                                                                                                                                                                                                                                            halfWholeDiminishedAeolian.map((string, index) => (
                                                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                                                            modeOne === 'Aeolian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                aeolianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Locrian' ?
                                                                                                                                                                                                                                                                                                    halfWholeDiminishedLocrian.map((string, index) => (
                                                                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                                                                    modeOne === 'Locrian' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                        locrianHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Harmonic Minor' ?
                                                                                                                                                                                                                                                                                                            halfWholeDiminishedHarmonicMinor.map((string, index) => (
                                                                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                                                                            modeOne === 'Harmonic Minor' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                                harmonicMinorHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Harmonic Dominant' ?
                                                                                                                                                                                                                                                                                                                    halfWholeDiminishedHarmonicDominant.map((string, index) => (
                                                                                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                                                                                    modeOne === 'Harmonic Dominant' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                                        harmonicDominantHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Melodic Minor' ?
                                                                                                                                                                                                                                                                                                                            halfWholeDiminishedMelodicMinor.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                                                                                            modeOne === 'Melodic Minor' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                                                melodicMinorHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                                                                                modeOne === 'Half Whole Diminished' && modeTwo === 'Lydian Dominant' ?
                                                                                                                                                                                                                                                                                                                                    halfWholeDiminishedLydianDominant.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                        <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                                    )) :
                                                                                                                                                                                                                                                                                                                                    modeOne === 'Lydian Dominant' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                                                        lydianDominantHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                            <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                                        )) :
                                                                                                                                                                                                                                                                                                                                        modeOne === 'Half Whole Diminished' && modeTwo === 'Locrian Two' ?
                                                                                                                                                                                                                                                                                                                                            halfWholeDiminishedLocrianTwo.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                                <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                                            )) :
                                                                                                                                                                                                                                                                                                                                            modeOne === 'Locrian Two' && modeTwo === 'Half Whole Diminished' ?
                                                                                                                                                                                                                                                                                                                                                locrianTwoHalfWholeDiminished.map((string, index) => (
                                                                                                                                                                                                                                                                                                                                                    <li key={index}>{string}</li>
                                                                                                                                                                                                                                                                                                                                                )) :
                                                                                                                                                                                                                                                                                                                                                modeOneDifferentNote.map((note, index) => (
                                                                                                                                                                                                                                                                                                                                                    <li key={index}>{note.number} {note.note} becomes </li>
                                                                                                                                                                                                                                                                                                                                                ))
                    }
                </article>
                <article className='flex flex-col text-start'>
                    {modeOne === 'Altered' || modeTwo === 'Altered' ? null :
                        modeOne === 'Whole Tone' || modeTwo === 'Whole Tone' ? null :
                            modeOne === 'Half Whole Diminished' || modeTwo === 'Half Whole Diminished' ? null :
                                modeTwoDifferentNote.map((note, index) => (
                                    <li key={index} className='pl-1'>{note.number} {note.note}</li>
                                ))}
                </article>
            </ol>

        </main>
    )
}

export default ModeComparison