import React, { useRef, useState } from 'react'
import style from './Title.module.scss'

function Title ({text}) {

    const ref= useRef(null)
    
    const [position, setPosition] = useState({x: null, y: null});



    const _onMouseMove = (e) => {

        
        const width = ref.current.clientWidth;
        const height = ref.current.clientHeight;
        const oX = (e.nativeEvent.offsetX/width) * 100
        const oY = (e.nativeEvent.offsetY/height) * 100
        setPosition({...position, x: oX, y: oY})

    }

    const _onMouseOut = () => {
        setPosition({...position, x: 0, y: 0})
    }

  
    const maskStyle = {
        '--maskX': position.x,
        '--maskY': position.y
    }
    return (
      <div 
      className={style.titleContainer} 
      onMouseMove={_onMouseMove} 
      onMouseOut={_onMouseOut} 
      ref={ref}
      style={maskStyle}
      >
          <div className={style.titleWrapper} >
              <h1>{text}</h1>
          </div>
          <div className={[style.titleWrapper, style.cloneWrapper]} >
              <h1>{text}</h1>
          </div>
      </div>
    )
  }
  
  export default Title;