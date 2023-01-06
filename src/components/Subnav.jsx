import {React, useState} from 'react'
import './Subnav.scss'
import {RiReactjsFill} from 'react-icons/Ri'
import {VscClose} from 'react-icons/vsc'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiMarkdown} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {usePageStore} from '../Store'



function Subnav() {
    const[HomeActive, setHome] = useState(true);
    const[AboutActive, setAbout] = useState(false);
    const[ContactActive, setContact] = useState(false);
    const[ProjectsActive, setProjects] = useState(false);
    const[GitActive, setGit] = useState(false);
    const about = usePageStore(state => state.about)
    const contact = usePageStore(state => state.contact)
    const projects = usePageStore(state => state.projects)
    const githubb = usePageStore(state => state.githubb)
    const home = usePageStore(state => state.home)
    const toggleHome = usePageStore(state => state.toggleHome)
    const toggleAbout = usePageStore(state => state.toggleAbout)
    const toggleContact = usePageStore(state => state.toggleContact)
    const toggleProjects = usePageStore(state => state.toggleProjects)
    const toggleGithubb = usePageStore(state => state.toggleGithubb)
  return (
    <div className='Subnav'>
        <div onClick={()=>{
            if(!HomeActive){
                setHome(true);
                setAbout(false);
                setContact(false);
                setGit(false);
                setProjects(false);
                setGit(false);
            }
            if(!home){
                toggleHome()
            }
        }} className={HomeActive ? 'Homesubnav-active':'Homesubnav'}>
            <p><RiReactjsFill size={18} color={'cyan'} className='reacticonsubnav'/>Home.jsx <VscClose size={25} color={'#ccc6a9'} className={HomeActive ? 'closesubnav':'closesubnav-hidd'}/></p>
        </div>
        <div onClick={()=>{
            if(!AboutActive){
                setAbout(true);
                setContact(false);
                setGit(false);
                setHome(false);
                setProjects(false);
                setGit(false);

                if(home){
                    toggleHome()
                    if(!about){
                        toggleAbout()
                    }
                }
                if(contact){
                    toggleContact()
                    if(!about){
                        toggleAbout()
                    }
                }
                if(githubb){
                    toggleGithubb()
                    if(!about){
                        toggleAbout()
                    }
                }
                if(projects){
                    toggleProjects()
                    if(!about){
                        toggleAbout()
                    }
                }

        }
        }} className={AboutActive ? 'Aboutsubnav-active':'Aboutsubnav'}>
        <p><SiHtml5 size={18} color={'#e44d26'} className='htmliconsubnav'/>About.html <VscClose size={25} color={'#ccc6a9'} className={AboutActive ? 'closesubnav2': 'closesubnav-hidd'}/></p>
        </div>
        <div onClick={()=>{
            if(!ContactActive){
                setAbout(false);
                setContact(true);
                setGit(false);
                setHome(false);
                setProjects(false);
                setGit(false);

                if(home){
                    toggleHome()
                    if(!contact){
                        toggleContact()
                    }
                }
                if(about){
                    toggleAbout()
                    if(!contact){
                        toggleContact()
                    }
                }
                if(githubb){
                    toggleGithubb()
                    if(!contact){
                        toggleContact()
                    }
                }
                if(projects){
                    toggleProjects()
                    if(!contact){
                        toggleContact()
                    }
                }

            }
        }} className={ContactActive ? 'Contactsubnav-active':'Contactsubnav'}>
        <p><SiCss3 size={18} color={'#387ab2'} className='cssiconsubnav'/>Contact.css <VscClose size={25} color={'#ccc6a9'} className={ ContactActive ? 'closesubnav3': 'closesubnav-hidd'}/></p>
        </div>
        <div onClick={()=>{
            if(!ProjectsActive){
                setAbout(false);
                setContact(false);
                setGit(false);
                setHome(false);
                setProjects(true);
                setGit(false);
                if(home){
                    toggleHome()
                    if(!projects){
                        toggleProjects()
                    }
                }
                if(about){
                    toggleAbout()
                    if(!projects){
                        toggleProjects()
                    }
                }
                if(contact){
                    toggleContact()
                    if(!projects){
                        toggleProjects()
                    }
                }
                if(githubb){
                    toggleGithubb()
                    if(!projects){
                        toggleProjects()
                    }
                }
            }
        }} className={ProjectsActive ? 'Projectssubnav-active':"Projectssubnav"}>
        <p><SiJavascript size={14} color={'#ffca28'} className='jsiconsubnav'/>Projects.js <VscClose size={25} color={'#ccc6a9'} className={ProjectsActive ? 'closesubnav4' : 'closesubnav-hidd'}/></p>
        </div>
        <div onClick={()=>{
            if(!GitActive){
                setAbout(false);
                setContact(false);
                setGit(false);
                setHome(false);
                setProjects(false);
                setGit(true);

                
                if(home){
                    toggleHome()
                    if(!githubb){
                        toggleGithubb()
                    }
                }
                if(about){
                    toggleAbout()
                    if(!githubb){
                        toggleGithubb()
                    }
                }
                if(contact){
                    toggleContact()
                    if(!githubb){
                        toggleGithubb()
                    }
                }
                if(projects){
                    toggleProjects()
                    if(!githubb){
                        toggleGithubb()
                    }
                }
 
            }
        }} className={GitActive ? 'Githubsubnav-active':"Githubsubnav"}>
        <p><SiMarkdown size={18} color={'#3a80bb'} className='mdiconsubnav'/>Github.md <VscClose size={25} color={'#ccc6a9'} className={ GitActive ? 'closesubnav5':'closesubnav-hidd'}/></p>
        </div>
    </div>
  )
}

export default Subnav