import useWebAnimations from '@wellyshen/use-web-animations';
import React from 'react'

export const Solo2 = () => {
    const frames = [
      { transform: "translateX(0px)"},
      {transform: "translateY(20px)"}
    ]

    const timming = {
        duration: 2600,
      iterations: Infinity,
      transitions: 0.5,
      direction: "alternate",
      

        
    }

    const movmnt = useWebAnimations({
        keyframes : frames,
        animationOptions: timming
    })
    return (
            <div className="col">
        <div className="shell">
            <div className="main">
                <div className="prt1">
             <h1>Future-Proof <br/> Payments and <br/> Value Transfer</h1>

            <p>Syscoin Platform offers fast and <br/> low-cost tokens, assets, and NFTs 
            <br/> secured by Bitcoin's censorship- 
            <br/> resistance and hashrate.</p>
            
             <a>Kickstart Your NFT in minutes</a>
             </div>
                
                <div className="prt2" >
                    <div id="wada">
                    <div id="div">Blockchain-Stats</div>
                    <ul >
                        <li>Masternodes enabled 2.131</li>
                        <li>Transaction fee $0.00000846</li>
                        <li>Hashrate 25.30EH/s</li>
                    </ul>
                    </div>
                    <img id="movmnt" ref={movmnt.ref}  id="blue-pic" src="https://syscoin.org/assets/images/Syscoin_Island.svg" alt="blue image"/>
                </div>
          
          
           </div>
        </div>
        </div>
    )
}
