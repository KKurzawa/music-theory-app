import './FunctionalHarmonyDisplay.css'

const FunctionalHarmonyDisplay = ({ props: { majorScale, minorScale, majorModes, majorRomanNumerals, majorChords, minorChords, minorRomanNumerals, minorModes } }) => {
  return (
    <main>
      <article className='flex flex-row justify-evenly w-full'>
        <header>{majorScale[0]} Major</header>
        <header>Modes</header>
        <header>Chords</header>
        <header>{minorScale[0]} Minor</header>
        <header>Modes</header>
        <header>Chords</header>
      </article>
      <article className='flex flex-row justify-evenly w-full'>
        <ul>
          {majorScale.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <ul>
          {majorModes.map((mode, index) => (
            <li key={index}>{mode}</li>
          ))}
        </ul>
        <ul>
          {majorRomanNumerals.map((mode, index) => (
            <li key={index}>{mode}</li>
          ))}
        </ul>
        <article className='flex flex-row'>
          <ul>
            {majorScale.map((note, index) => (
              <li key={index} className='flex justify-end'>{note}</li>
            ))}
          </ul>
          <ul>
            {majorChords.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </article>
        <ul>
          {minorScale.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <ul>
          {minorModes.map((mode, index) => (
            <li key={index}>{mode}</li>
          ))}
        </ul>
        <ul>
          {minorRomanNumerals.map((mode, index) => (
            <li key={index}>{mode}</li>
          ))}
        </ul>
        <article className='flex flex-row'>
          <ul>
            {minorScale.map((note, index) => (
              <li key={index} className='flex justify-end'>{note}</li>
            ))}
          </ul>
          <ul>
            {minorChords.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </article>
      </article>
    </main>

  )
}

export default FunctionalHarmonyDisplay