import {React, useState} from 'react'
import Typewriter from 'typewriter-effect'
import './Home.scss'
import Mine1 from '../assets/mine1.jpg'
import Mine2 from '../assets/mine2.jpg'
import Mine3 from '../assets/mine3.jpg'
import Mine4 from '../assets/mine4.jpg'
import Mine5 from '../assets/mine5.jpg'
import Mine6 from '../assets/mine6.jpg'
import Walking from '../assets/amongus.gif'
import Stopped from '../assets/lol.gif'
import {usePageStore} from '../Store'


function Home() {
  const [imageSrc, setImageSrc] = useState(Walking);
  const [imagepMove, setImageP] = useState(true);
  const home = usePageStore(state => state.home)
  // const contact = usePageStore(state => state.contact)
  // const projects = usePageStore(state => state.projects)
  // const githubb = usePageStore(state => state.githubb)
  // const toggleHome = usePageStore(state => state.toggleHome)

  function handleamongus(){
    setImageSrc(Stopped);
    setImageP(false);
    setTimeout(() => {
      setImageSrc(Walking);
      setImageP(true);
    }, 1200);
    setTimeout(() => {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }, 1200);
  }
  return (
    <div className={home ? 'Home':'Home-hidd'}>

      <div className="typewrite">
        <h1 className='HomeName'>Neek Kafle</h1>
        <Typewriter className='typewrite-front'
          options={{
            strings: ["I Am A Student.", "I Love To Code </>", "I Work As A Freelancer."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="SeeProjects">
        <button className='SeeProjectsButton'>See Project</button>
      </div>
      <div className="ContactMe">
        <button className='ContactMeButton'>Contact Me</button>
      </div>
      <div className="imgatom1"></div>
      <div className="imgatom2"></div>
      <div className="imagehome">
        <div className="image1">
        <img src={Mine1} className='img1' alt="Its Meeee" />
        <div className="box5">
          <p className='sixthhoverp'>
            Hobbies
            <br />
            <br />

            Reading
            <br />
            Drawing
            <br /> 
            Designing
          </p>
        </div>
        </div>
        <div className="image2">
        <img src={Mine2} className='img2' alt="Its Meeee" />
        <div className="box4">
          <p className='fifthhoverp'>Python, React, C</p>
        </div>
        </div>
        <div className="image3">
        <img src={Mine3} className='img3' alt="Its Meeee" />
        <div className="box3">
          <p className='fourthhoverp'>I Am From Nepal</p>
        </div>
        </div>
        <div className="image4">
        <img src={Mine4} className='img4' alt="Its Meeee" />
        <div className="box2">
          <p className='thirdhoverp'>+2 @ Vishwa Adarsha College</p>
        </div>
        </div>
        <div className="image5">
        <img src={Mine5} className='img5' alt="Its Meeee" />
        <p className='firsthoverp'><span>Name</span> : Neek Kafle,<br/></p>
        </div>
        <div className="image6">
        <img src={Mine6} className='img6' alt="Its Meeee" />
        <div className="box1">
          <p className='secondhoverp'>I Am 17.</p>
        </div>
        </div>

      </div>
      <marquee behavior="scroll" direction="right" className='walkingg'>
        <p className={imagepMove ? 'amongp':'amongpoff'}>Neek</p><img className='imageamongus' src={imageSrc} onClick={handleamongus}/>
          <div className="hidhover">
            <p className={imagepMove ? "pamongg":"hidooo"}>Don't Click Me Else..</p>
            <p className={imagepMove ? "hidooo":"ouchtext"}>Ouch! Surprise For You</p>
          </div>
      </marquee>
    </div>
  )
}

export default Home