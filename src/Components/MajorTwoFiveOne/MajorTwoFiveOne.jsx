import './MajorTwoFiveOne.css'

const MajorTwoFiveOne = ({ props: { majorScale, majorChords, majorRomanNumerals } }) => {
    return (
        <main className='flex flex-col w-full'>
            <ol className='flex flex-row justify-evenly w-full'>
                <li>{majorRomanNumerals[1]}</li>
                <li>{majorRomanNumerals[4]}</li>
                <li>{majorRomanNumerals[0]}</li>
            </ol>
            <article>
                <ol className='flex flex-row justify-evenly w-full'>
                    <article className='flex flex-row'>
                        <li>{majorScale[1]}</li>
                        <li>{majorChords[1]}</li>
                    </article>
                    <article className='flex flex-row'>
                        <li>{majorScale[4]}</li>
                        <li>{majorChords[4]}</li>
                    </article>
                    <article className='flex flex-row'>
                        <li>{majorScale[0]}</li>
                        <li>{majorChords[0]}</li>
                    </article>
                </ol>
            </article>

        </main>
    )
}

export default MajorTwoFiveOne