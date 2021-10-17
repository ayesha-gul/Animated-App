import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react'

export const Solo7 = () => {
    const frames =[
        {transform: "rotateY(360deg)"},
    ]
  
    
    const timming = {
        duration: 3700,
    iterations: Infinity,
      transitions:  0.5 ,
      direction: 'alternate'
    }

    const move = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    const move1 = useWebAnimations({
        keyframes: frames,
        animationOptions: timming
    })

    return (
        <div className="bg-last">
            <div className="shell">
            <div className="partners">
                        <div className="partner1" >
                            <img src="https://syscoin.org/assets/images/svg/icon_sysdev.svg" alt=""/>
                            <p>Start developing</p>
                        </div>

                        <div className="partner1">
                            <img src="https://syscoin.org/assets/images/svg/icon_public.svg" id="move1" ref={move1.ref} alt=""/>
                            <p>Partner up</p>
                        </div>

                        <div className="partner1">
                            <img src="https://syscoin.org/assets/images/svg/icon_devarticles.svg" id="move" ref={move.ref} alt=""/>
                            <p>Whitepappers</p>
                        </div>

                        <div className="partner1">
                            <img src="https://syscoin.org/assets/images/svg/github-icon.svg" width="150px" alt=""/>
                            <p id="git">Github</p>
                        </div>
            </div>
            </div>
           
        </div>
    )
}
