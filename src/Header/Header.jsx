import './Header.css'

const Header = () => {
    return (
        <nav>
            <ol className='flex justify-evenly'>
                <li><a href='/'>Home</a></li>
                <li><a href='/functionalHarmony'>Functional Harmony</a></li>
                <li><a href='/modesInParallel'>Modes In Parallel</a></li>
            </ol>
        </nav>
    )
}

export default Header