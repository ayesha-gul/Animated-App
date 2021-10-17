import useWebAnimations from '@wellyshen/use-web-animations'
import React from 'react'

export const Solo3 = () => {
   const frames = [
       {transform: "rotate(360deg)"},
   ]
   const timing = {
    duration: 3700,
    iterations: Infinity,
      transitions:  0.5 ,
      
   }

   const rotate = useWebAnimations({
       keyframes: frames,
       animationOptions: timing
   })

    return (
 
           <div className="main-sec">

               <div className="shell">
                    <div className="sec">
                        <h2>Your NFT, Asset or Token on Syscoin Platform</h2>
                        <p>We have everything you need to get up and running quickly on our scalable and low-cost network</p>
                    </div>

                    <div className="third">
                        <div className="nadi">
                        <div className="cont1">
                        <img src="https://syscoin.org/assets/images/svg/icon_scalable.svg" alt="pic 1" width="150px" className="pic1"/>
                        <h3>Scalabililty</h3>
                        <p>Independently tested by<br/> 
                            Whiteblock to  demonstrate <br/>
                            a  transaction rate of up <br/> to
                            60,000 TPS
                        </p>
                        </div>

                        <div className="cont2">
                        <img src="https://syscoin.org/assets/images/svg/icon_affordable.svg" width="150px" alt="pic 1" className="pic1"/>
                        <h3>Low fees</h3>
                        <p>Syscoin platform is <br/> designed
                             to keep fees low,  <br/> at
                            a fraction of a penny per <br/>  
                           transaction
                        </p>
                        </div>

                        <div className="cont3">
                        <img src="https://syscoin.org/assets/images/svg/icon_notary.svg" alt="pic 1" width="150px" className="pic1"/>
                        <h3>Compliance</h3>
                        <p>Our ground-breaking<br/> compliance
                            rulesets allow <br/> you
                            to comply  with global <br/>  and  regional
                          regulations
                        </p>
                        </div>
                      
                    </div>
                      
                      <div className="cont4">
                          <div className="right">
                            <img  id="rotate" ref={rotate.ref} src="https://syscoin.org/assets/images/svg/icon_secure.svg" width="100px" alt="pic4"/>
                          </div>
                          <div className="left">
                              <p> Syscoin is a proof-of-work blockchain with a hashrate second only to Bitcoin. It is merge- <br/>
                               mined with Bitcoin to offer unrivaled security, with multi-quorum chainlocks for higher <br/>
                                resistance to 51% attacks.</p>
                              

                          </div>
                      </div>
                    </div>
                            <div className="discover">
                                <div className="disc">
                                    <h2>Discover</h2>
                                </div>

                                <div className="fourth">
                                    <div className="disc1">
                                        <img src="https://syscoin.org/assets/images/svg/icon_coins.svg" width="150px" alt="img1"/>
                                        <p>Syscoin Platform <br/> Token (SPTs)</p>
                                    </div>

                                    <div className="disc2">
                                        <img src="https://syscoin.org/assets/images/svg/icon_nft.svg" width="150px" alt="img2"/>
                                        <p>NFTs</p>
                                    </div>
                                     
                                     <div className="disc3">
                                         <img src="https://syscoin.org/assets/images/svg/icon_allaround.svg" alt="img3"/>
                                         <p>Masternodes</p>
                                     </div>

                                     <div className="disc4">
                                         <img src="https://syscoin.org/assets/images/svg/icon_sysdev.svg" alt="img4"/>
                                         <p>Our SDK</p>
                                     </div>

                                </div>

                            <div className="line">
                                <p>Start using Syscoin today for scalable <strong>Loyalty points</strong> |</p>
                                </div>    
                                

                            </div>
               </div>
     
           </div>
      

   
    )
}
