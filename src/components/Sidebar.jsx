import React, {useState, useEffect} from 'react'
import './Sidebar.scss'
import {Link} from 'react-router-dom'
import {VscAccount} from 'react-icons/vsc'
import {VscGear} from 'react-icons/vsc'
import {VscFiles} from 'react-icons/vsc'
import {VscGithub} from 'react-icons/vsc'
import {VscMarkdown} from 'react-icons/vsc'
import {VscCode} from 'react-icons/vsc'
import {VscJson} from 'react-icons/vsc'
import {VscMention} from 'react-icons/vsc'
import {VscChevronDown} from 'react-icons/vsc'
import {TbDots} from 'react-icons/tb'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiNpm} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/Ri'
import {usePageStore} from '../Store'

function Sidebar() {

  const[GithubActive, setGithubActive] = useState(false)
  const[FilesActive, setFilesActive] = useState(false)
  const[CodeActive, setCodeActive] = useState(false)
  const[SideActive, setSideActive] = useState(false)
  const[SocialActive, setSocialActive] = useState(false)
  const[ArrowActive, setArrowActive] = useState(true)
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

  useEffect(() => {
    setFilesActive(true);
    setSideActive(true);
  }, []);

  return (
    <div className='Sidebar'>
      <div className="logoaccountsidebar">
              <VscAccount className='sidebaraccountlogo' size={25}/>
      </div>
      <div className="logosettingsidebar">
              <VscGear className='sidebarsettinglogo' size={30}/>
      </div>
      <div className={FilesActive ? 'logofilessidebar-active':'logofilessidebar'}>
              <VscFiles className='sidebarfilelogo' size={30} onClick={(e) =>{
                setFilesActive(true);
                setGithubActive(false);
                setCodeActive(false);
                setSocialActive(false);
                if(SideActive && FilesActive){
                  setSideActive(false);
                }
                else if(!SideActive){
                  setSideActive(true);
                }
              }}/>
      </div>
      <div className={GithubActive ? 'logogithubsidebar-active':'logogithubsidebar'}>
              <VscGithub className='sidebargithublogo' size={30} onClick={(e) =>{
                setGithubActive(true);
                setFilesActive(false);
                setCodeActive(false);
                setSocialActive(false);
                if(SideActive && GithubActive){
                  setSideActive(false);
                }
                else if(!SideActive){
                  setSideActive(true);
                }
              }}/>
      </div>
      <div className={CodeActive ? 'logocodesidebar-active':'logocodesidebar'}>
              <VscCode className='sidebarcodelogo' size={35} onClick={(e) =>{
                setCodeActive(true)
                setGithubActive(false);
                setFilesActive(false);
                setSocialActive(false);
                if(SideActive && CodeActive){
                  setSideActive(false);
                }
                else if(!SideActive){
                  setSideActive(true);
                }
              }}/>
      </div>
      <div className={SocialActive ? 'logosocialsidebar-active':'logosocialsidebar'}>
              <VscMention className='sidebarsociallogo' size={40} onClick={(e) =>{
                setSocialActive(true)
                setCodeActive(false)
                setGithubActive(false);
                setFilesActive(false);
                if(SideActive && SocialActive){
                  setSideActive(false);
                }
                else if(!SideActive){
                  setSideActive(true);
                }
              }}/>
      </div>
      <div className={SideActive ? 'sidebarss':'sidebarss-hidden'}>
              <p className='explorer'>EXPLORER <TbDots className='dotsexp' size={17}/></p>
              <p className='explorerfoldername' onClick={(e) =>{
                if (ArrowActive){
                setArrowActive(false);
                }
                else if(!ArrowActive){
                  setArrowActive(true);
                }
              }}><VscChevronDown size={18} className={ArrowActive ? 'explorerrotateicon' : 'explorerrotateicon-active'} onClick={(e) =>{
                if (ArrowActive){
                setArrowActive(false);
                }
                else if(!ArrowActive){
                  setArrowActive(true);
                }
              }}/>Neek Kafle</p>
            <div className={ArrowActive ? 'files' : 'files-hide'}>

              <div className="homejsx" onClick={()=>{
            if(!home){
                toggleHome()
            }
        }}>
                <p><RiReactjsFill size={13} color="cyan" className='reacticon'/> Home.jsx</p>
                </div>

              <div className="abouthtml" onClick={()=>{
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
              }>
                <p><SiHtml5  size={13} color="#e44d26" className='htmlicon'/> About.html</p>
                </div>

              <div className="contactcss" onClick={
                ()=>{
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
              }>
                <p><SiCss3 size={13} color="#409de9" className='cssicon'/> Contact.css</p>
                </div>

              <div className="projectjs" onClick={()=>{
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
              }>
                <p><SiJavascript size={13} color="#ffca28" className='jsicon'/> Projects.js</p>
                </div>

              <div className="socialjson">
                <p><SiNpm size={13} color="#fc8289" className='jsonicon'/> Social.json</p>
                </div>
                
              <div className="githubmd" onClick={()=>{
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
              }>
                <p><VscMarkdown size={13} color="#42a5f5" className='mdicon'/> Github.md</p>
                </div>

            </div>
      </div>
    </div>
  )
}

export default Sidebar