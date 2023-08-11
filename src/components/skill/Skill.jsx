import React from 'react';
import { motion } from "framer-motion"; 

const Skill = () => {
  return (
    <motion.div id="skill" className='skill_wrap'
    initial={{opacity:0, y:50}}
    whileInView={{
      opacity:1, 
      y:0,
      transition:{
        duration:1,
        delay:0.2
      }
    }}
    >
      <div className='skill_inner'>
        <div className='skill_left'>
          <h2>What<br/>I Can Do</h2>
          <span>Skills</span>
        </div>
        <div className='skill_right'>
          <div className='skill_lang'>
            <p className='skill_name'>Language</p>
            <div className="skill_item_wrap">
              <div className='skill_item'>
                <img  height="50" width="50" src="https://cdn.simpleicons.org/HTML5/FF335F" alt="HTML5"/>
                <span>HTML5</span>
              </div>
              <div className='skill_item'>
              <img height="50" width="50" src="https://cdn.simpleicons.org/CSS3/FF335F"  alt="CSS3"/>
                <span>CSS3</span>
              </div>
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/javascript/FF335F"  alt="javascript" />
                <span>Javascript</span>
              </div>
            </div>
          </div>
          <div className='skill_lib'>
            <p className='skill_name'>FrameWork/Library</p>
            <div className="skill_item_wrap">
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/react/FF335F"  alt="react"/>
                <span>React</span>
              </div>
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/vuedotjs/FF335F" alt="vue.js" />
                <span>Vue</span>
              </div>
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/sass/FF335F"  alt="sass"/>
                <span>Sass</span>
              </div>
            </div>
          </div>
          <div className='skill_tool'>
            <p className='skill_name'>Tool</p>
            <div className="skill_item_wrap">
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/GitHub/FF335F" alt="git" />
                <span>Git</span>
              </div>
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/notion/FF335F" alt="notion" />
                <span>Notion</span>
              </div>
              <div className='skill_item'>
              <img height="50" width="50" src="https://cdn.simpleicons.org/figma/FF335F" alt="figma" />
                <span>Figma</span>
              </div>
              <div className='skill_item'>
                <img height="50" width="50" src="https://cdn.simpleicons.org/adobephotoshop/FF335F" alt="adobephotoshop" />
                <span>Adobe Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Skill