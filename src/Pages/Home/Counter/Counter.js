import React from 'react';
import './Counter.css';
const Counter = () => {
         return (
                  <div className="counter">
                        <div className="d-flex align-items-center justify-content-around count-style">
                               <div className="counter-border">
                                    <div className="text">
                                    <h1>487</h1>
                                    <p>MATCHES PLAYED</p>
                                    </div>
                                    
                              </div>  
                               <div className="counter-border">
                                    <h1>310</h1>
                                    <p>WINS</p>
                                      </div>  
                               <div className="counter-border">
                                    <h1>27</h1>
                                    <p>TEAM MEMBERS</p>
                                      </div>  
                               <div className="counter-border">
                                    <h1>14</h1>
                                    <p>AWARDS WON</p>
                                      </div>  
                           </div>   
                  </div>
         );
};

export default Counter;