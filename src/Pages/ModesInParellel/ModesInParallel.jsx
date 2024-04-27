import './ModesInParallel.css'
import ModeSelector from '../../Components/ModeSelector/ModeSelector'
import { useState } from 'react'

const ModesInParallel = () => {
    let [root, setRoot] = useState('C')
    let [modeOne, setModeOne] = useState('Ionian')
    let [modeTwo, setModeTwo] = useState('Aeolian')

    return (
        <ModeSelector props={{ root, setRoot, modeOne, setModeOne, modeTwo, setModeTwo }} />
    )
}

export default ModesInParallel