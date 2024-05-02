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
    halfWholeDiminishedAltered
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
                                                                                                                                        modeOneDifferentNote.map((note, index) => (
                                                                                                                                            <li key={index}>{note.number} {note.note} becomes </li>
                                                                                                                                        ))
                    }
                </article>
                <article className='flex flex-col text-start'>
                    {modeOne === 'Altered' || modeTwo === 'Altered' ? null :
                        modeTwoDifferentNote.map((note, index) => (
                            <li key={index} className='pl-1'>{note.number} {note.note}</li>
                        ))}
                </article>
            </ol>

        </main>
    )
}

export default ModeComparison