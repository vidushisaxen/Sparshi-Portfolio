import React, { useEffect } from 'react';
import './Circular.css'
 
const Circular = () => {
  useEffect(() => {
    const adjustMenuItems = () => {
      const items = document.querySelectorAll('.circle-menu-box a.menu-item');
      
      for (let i = 0, l = items.length; i < l; i++) {
        items[i].style.left = (40 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        items[i].style.top = (40 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
      }
    };

    
    adjustMenuItems(); 
   
    window.addEventListener('resize', adjustMenuItems);

    return () => {
      
      window.removeEventListener('resize', adjustMenuItems);
    };
  }, []); 

  return (
    <div className="circular-container">
    
      <div className="menu-container">

        <div className="circle-menu-box">

          <a href="#" className="menu-item">
            7QC tools
          </a>

          <a href="#" className="menu-item">
            Pareto Analysis
          </a>

          <a href="#" className="menu-item">
            Homologation
          </a>

          <a href="#" className="menu-item">
            Benchmarking
          </a>

          <a href="#" className="menu-item">
            Coaching
          </a>

          <a href="#" className="menu-item">
          </a>

          <a href="#" className="menu-item">
          </a>

          <a href="#" className="menu-item">
          </a>

        </div>

      </div>
    </div>
  );
};

export default Circular;
