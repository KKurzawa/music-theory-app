import './ModeSelector.css'
import Select from 'react-select'
import { modeOptions } from '../../Utils/ModesArray'

const ModeSelector = ({ props: { modeOne, setModeOne, modeTwo, setModeTwo } }) => {
    return (
        <main className='flex justify-evenly'>
            <Select
                placeholder={'Choose a Mode'}
                classNamePrefix="Mode 1"
                options={modeOptions}
                onChange={(modeOne) => setModeOne(Object.values(modeOne.value).join(''))}
                value={modeOne}
                name={modeOne}
            />
            <Select
                placeholder={'Choose a Mode'}
                classNamePrefix="Mode 2"
                options={modeOptions}
                onChange={(modeTwo) => setModeTwo(Object.values(modeTwo.value).join(''))}
                value={modeTwo}
                name={modeTwo}
            />
        </main>
    )
}

export default ModeSelector