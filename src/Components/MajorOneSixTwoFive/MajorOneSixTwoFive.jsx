import './MajorOneSixTwoFive.css'

const MajorOneSixTwoFive = ({ props: { majorScale, majorChords, majorRomanNumerals } }) => {
    return (
        <main className='flex flex-col items-center w-full'>
            <ol className='flex fles-row justify-evenly w-full'>
                <li>{majorRomanNumerals[0]}</li>
                <li>VI</li>
                <li>{majorRomanNumerals[1]}</li>
                <li>{majorRomanNumerals[4]}</li>
            </ol>
            <ol className='flex fles-row justify-evenly w-full'>
                <li>{majorScale[0]}{majorChords[0]}</li>
                <li>{majorScale[5]}7&#40;b9, b13&#41;</li>
                <li>{majorScale[1]}{majorChords[1]}</li>
                <li>{majorScale[4]}{majorChords[4]}</li>
            </ol>
        </main>
    )
}

export default MajorOneSixTwoFive