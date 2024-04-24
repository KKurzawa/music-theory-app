import './FunctionalHarmonySelecter.css'
import { numberOfSharpsFlats } from '../../Utils/ScaleshordsArray'

const FunctionalHarmonySelecter = ({ props: { sharpsFlats, setSharpsFlats, number, setNumber, majorScale, minorScale, handleSharpFlatChange, handleNumberChange, numberOfSharpsFlats } }) => {
    return (
        <main className='flex flex-col items-center w-full'>
            <article className='flex flex-row justify-evenly w-full'>
                <section className='flex flex-col'>
                    <header>Choose Sharps or Flats</header>
                    <select value={sharpsFlats} onChange={handleSharpFlatChange}>
                        <option value={'Sharps'}>Sharps</option>
                        <option value={'Flats'}>Flats</option>
                    </select>
                </section>
                <section className='flex flex-col'>
                    <header>Choose the number of Sharps or Flats.</header>
                    <select onChange={handleNumberChange} name={number} value={number}>
                        {numberOfSharpsFlats.map((item, index) => (
                            <option key={index} value={item}
                                className='text-start'>{item}</option>
                        ))}
                    </select>
                </section>
            </article>
        </main>
    )
}

export default FunctionalHarmonySelecter