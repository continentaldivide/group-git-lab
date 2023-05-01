import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <p>I'm home</p>
            <Link to={'/about'}>About Us</Link>
        </>
    )
}