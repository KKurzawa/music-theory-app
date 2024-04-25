import './Header.css'

const Header = () => {
    return (
        <nav>
            <ol className='flex justify-evenly'>
                <li><a href='/'>Home</a></li>
                <li><a href='/FunctionalHarmony'>Functional Harmony</a></li>
                <li><a href='/ChordProgressions'>Chord Progressions</a></li>
                <li><a href='/ModesInParallel'>Modes In Parallel</a></li>
            </ol>
        </nav>
    )
}

export default Header