import './ModesInParellelDisplay.css'

const ModesInParellelDisplay = ({ props: { modeOne, modeTwo, modeOneToMap, modeTwoToMap, modeOneChordTonesToMap, modeTwoChordTonesToMap, seventhChordOne, seventhChordTwo, seventhChordOneTones, seventhChordTwoTones, chordOneName, chordTwoName, extensionsOne, extensionsTwo, extensionChordOne, extensionChordTwo } }) => {

    return (
        <>
            <main className='flex justify-evenly'>
                {/* mode one */}
                <article className='flex flex-col items-center'>
                    <header>{modeOne}</header>
                    <ul className='flex fle-row items-center'>
                        {modeOneToMap.map((note, index) => (
                            <li key={index} className='px-1'>{note}</li>
                        ))}

                    </ul>
                    <ul className='flex flex-row items-center'>
                        {modeOneChordTonesToMap.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <header>Chord: C{chordOneName}</header>
                    <ul className='flex flex-row items-center'>
                        {seventhChordOne.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <ul className='flex flex-row items-center'>
                        {seventhChordOneTones.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <header>Extensions</header>
                    <ul className='flex flex-row items-center'>
                        {extensionsOne.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <header>Extensions Chord: {extensionChordOne}</header>
                </article>
                {/* mode two */}
                <article className='flex flex-col items-center'>
                    <header>{modeTwo}</header>
                    <ul className='flex fle-row items-center'>
                        {modeTwoToMap.map((note, index) => (
                            <li key={index} className='px-1'>{note}</li>
                        ))}

                    </ul>
                    <ul className='flex flex-row items-center'>
                        {modeTwoChordTonesToMap.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <header>Chord: C{chordTwoName}</header>
                    <ul className='flex flex-row items-center'>
                        {seventhChordTwo.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <ul className='flex flex-row items-center'>
                        {seventhChordTwoTones.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <header>Extensions</header>
                    <ul className='flex flex-row items-center'>
                        {extensionsTwo.map((tone, index) => (
                            <li key={index} className='px-1'>{tone}</li>
                        ))}
                    </ul>
                    <h2>Extensions Chord: {extensionChordTwo}</h2>
                </article>
            </main >
        </>
    )
}

export default ModesInParellelDisplay