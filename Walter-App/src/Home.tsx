import './Home.css'
import IMG_3179 from './assets/IMG_3179.jpeg'



export default function Home() {
    return (
        <>
            <div>
                <h1>Welcome to Walter's world!</h1>
                <p>Hello there, pawsome friends! 🐾 <br /> My name is Walter 🐶 I am a West Highland White Terrier or Westie for short. <br /> Join me on an exciting journey through the adventures of my life!</p>
            </div>
            <div>
                <img src={IMG_3179} width='450'alt="Felt cute, might delete later..." />
            </div>
        </>

    )
}