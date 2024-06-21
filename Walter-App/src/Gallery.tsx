import CommentBox from './Comments'
import IMG_0055 from './assets/IMG_0055.jpeg'
import IMG_1201 from './assets/IMG_1201.jpeg'
import IMG_1289 from './assets/IMG_1289.jpeg'
import IMG_1726 from './assets/IMG_1726.jpeg'
import IMG_1775 from './assets/IMG_1775.jpeg'
import IMG_3179 from './assets/IMG_3179.jpeg'
import IMG_4393 from './assets/IMG_4393.jpeg'
import IMG_5299 from './assets/IMG_5299.jpeg'
import IMG_5384 from './assets/IMG_5384.jpeg'
import IMG_7259 from './assets/IMG_7259.jpeg'




export default function Gallery() {
    return (
        <>
        <div className=''>
            <div>
                <h3>Just woke up from a looooong nap; here's my bedhead!</h3>
                <img src={IMG_0055} width='450'alt="Just woke up from a looooong nap; here's my bedhead!" />
                <CommentBox/>
            </div>
            <div>
                <h3>Look at how small I was! I could fit into this little box.</h3>
                <img src={IMG_1201} width='450'alt="Look at how small I was! I could fit into this little box." />
                <CommentBox/>
            </div>
            <div>
                <h3>Taking it easy and trying to enjoy the nice weather.</h3>
                <img src={IMG_1289} width='450'alt="Taking it easy and trying to enjoy the nice weather." />
                <CommentBox/>
            </div>
            <div>
                <h3>First haircut; WHO DIS!? ;P</h3>
                <img src={IMG_1726} width='450'alt="First haircut; WHO DIS!? ;P" />
                <CommentBox/>
            </div>
            <div>
                <h3>HOW DID THIS HAPPEN!!?</h3>
                <img src={IMG_1775} width='450'alt="HOW DID THIS HAPPEN!!?" />
                <CommentBox/>
            </div>
            <div>
                <h3>Felt cute, might delete later...</h3>
                <img src={IMG_3179} width='450'alt="Felt cute, might delete later... " />
                <CommentBox/>
            </div>
            <div>
                <h3>Love this new hoodie! </h3>
                <img src={IMG_4393} width='450'alt="Love this new hoodie! <3" />
                <CommentBox/>
            </div>
            <div>
                <h3>Future too bright I need sunglasses.</h3>
                <img src={IMG_5299} width='450'alt="Future too bright I need sunglasses." />
                <CommentBox/>
            </div>
            <div>
                <h3>Selling toe bean pics; send DM for prices.</h3>
                <img src={IMG_5384} width='450'alt="Selling toe bean pics; send DM for prices." />
                <CommentBox/>
            </div>
            <div>
                <h3>Just me being me.</h3>
                <img src={IMG_7259} width='450'alt="Just me being me." />
                <CommentBox/>
            </div>
        </div>
        </>
    )
} 