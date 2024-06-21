import './Home.css'
import IMG_1775 from './assets/IMG_1775.jpeg'

export default function AboutMe() {
    return (
        <>
            <div>
            <h1>About Me, Walter! 🐶</h1>
            <p>
                Walter is not just a dog; he's a furry bundle of joy, mischief, and unconditional love. <br />
                Whether he's chasing his tail, mastering new tricks, or simply enjoying belly rubs, <br />
                Walter knows how to bring smiles to everyone around him. <br />
                Get ready for a paw-some time as we explore the world through Walter's eyes. <br />
                Thanks for stopping by, and remember - every day is a tail-wagging good time in Walter's World! 🐕💕 <br />
            </p>
        </div>
        <div>
            <img src={IMG_1775} width='450'alt="HOW DID THIS HAPPEN!!?" />
        </div>
    </>
    )
}