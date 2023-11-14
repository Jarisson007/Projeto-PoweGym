import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from "number-counter"

import {motion} from 'framer-motion'
const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  return (
    <div className="hero">

        <div className='blur hero-blur'></div>
        <div className="left-h">
          <Header/>
          <div className="a-melhor-ad">
            <motion.div
              initial={{left: '238px'}}
              whileInView={{left: '8px'}}
              transition={{...transition, type:'tween'}}
            ></motion.div>
            <span>A melhor Power Gym da cidade</span>
          </div>


          <div className="hero-text">
            <div>
              <span className='stroke-text'>Molde</span>
              <span> O seu</span>
            </div>
            <div><span>
              Corpo Ideal</span></div>
          <div>
            <span>
            Aqui vamos ajudá-lo a moldar e construir o seu corpo ideal e 
            viver a sua vida ao máximo
            </span>
          </div>
        </div>

        {/*figure*/}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
              </span>
            <span>TREINADORES ESPECIALIZADOS</span>
            </div>
          <div>
            <span>
            <NumberCounter end={980} start={820} delay='4' preFix="+"/>
              </span>
            <span>MEMBROS QUE ADERIRAM</span>
            </div>
          <div>
            <span>
            <NumberCounter end={1000} start={900} delay='4' preFix="+"/>
              </span>
            <span>PROGRAMAS FITNESS</span>
            </div>
          </div>

          {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Começar</buttons>
          <buttons className="btn">Saiba mais</buttons>
        </div>  
        </div>
        <div className="right-h">
          <button className="btn">Acesse agora</button>


          <motion.div
            initial={{ right: "-1rem"}}
            whileInView={{ right: "4rem"}}
            transition={transition}
            className='heart-rate'>
            <img src={Heart} alt='' />
            <span>Frequência Cardíaca</span><span>116 bpm</span>
          </motion.div>


          {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
           initial={{right: '11rem'}}
           whileInView={{right: '20rem'}}
           transition={transition}
           src={hero_image_back} alt="" className="hero-image-back" />

          {/* calorias */}
          <motion.div 
            initial={{ right: "37rem"}}
            whileInView={{ right: "28rem"}}
            transition={transition}
            className="calories"
            >
            <img src={Calories} alt="" />
            <div>

              <span>Calorias Queimadas</span>
              <span>220 kcal</span>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero