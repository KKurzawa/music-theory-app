import './FunctionalHarmonySelecter.css'
import { sharpsOrFlats, numberOfSharpsOrFlats } from '../../Utils/NumberOfSharpsOrFlatsArray'
import Select from 'react-select'

const FunctionalHarmonySelecter = ({ props: { sharpsFlats, setSharpsFlats, number, setNumber } }) => {

    return (
        <main className='flex justify-evenly w-full'>
            <Select
                placeholder={'Sharps or Flats'}
                classNamePrefix="Select Sharps or Flats"
                options={sharpsOrFlats}
                onChange={(sharpsFlats) => setSharpsFlats(Object.values(sharpsFlats.value).join(''))}
                value={sharpsFlats}
                name={sharpsFlats} />
            <Select
                placeholder={'Number of Sharps or Flats'}
                options={numberOfSharpsOrFlats}
                onChange={(number) => setNumber(Object.values(number.value).join(''))}
                value={number}
                name={number} />
        </main>
    )
}

export default FunctionalHarmonySelecter