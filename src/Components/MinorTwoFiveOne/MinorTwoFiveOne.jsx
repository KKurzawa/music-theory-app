import './MinorTwoFiveOne.css'

const MinorTwoFiveOne = ({ props: { minorScale, minorRomanNumerals, minorChords } }) => {
    return (
        <main className='flex flex-col w-full'>
            <ol className='flex flex-row justify-evenly w-full'>
                <li>{minorRomanNumerals[1]}</li>
                <li>V</li>
                <li>{minorRomanNumerals[0]}</li>
            </ol>
            <article>
                <ol className='flex flex-row justify-evenly w-full'>
                    <article className='flex flex-row'>
                        <li>{minorScale[1]}</li>
                        <li>{minorChords[1]}</li>
                    </article>
                    <article className='flex flex-row'>
                        <li>{minorScale[4]}</li>
                        <li>7&#40;b9, b13&#41;</li>
                    </article>
                    <article className='flex flex-row'>
                        <li>{minorScale[0]}</li>
                        <li>{minorChords[0]}</li>
                    </article>
                </ol>
            </article>

        </main>
    )
}

export default MinorTwoFiveOne