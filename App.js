// import './App.css';
//  import React, { useState, useEffect } from 'react';

// function App() {
//   const [isVisible, setIsVisible] = useState(false); 
//   useEffect(() => {
//     let scrollTimeout;

//     function handleScroll() {
//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setIsVisible(true); 
//       }, 100);
//     }
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(scrollTimeout);
//     };
//   }, []); 
//   return (
//     <div>
//       <img id="image1" src="https://i.ytimg.com/vi/GglZSR7tMew/hqdefault.jpg"/>
//       <div className={`heading ${isVisible ? 'show' : ''}`}>
//         <h2>HELLO THERE!!!!!!!!!!</h2>
//       </div>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
function App(){
  const [opacity, setOpacity] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(()=>{
    function handleScroll(){
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
  })
  useEffect(() => {
    const maxScrollPosition = document.body.scrollHeight - window.innerHeight;
    const opacityValue = 0 + (scrollPosition / maxScrollPosition);
    setOpacity(opacityValue);
  }, [scrollPosition]);

  return (
    <div>
      <img id="image1" src="https://i.ytimg.com/vi/GglZSR7tMew/hqdefault.jpg"/>
      <p className='heading' style={{ opacity: opacity ,fontSize:40, textShadow: 0.7}}>Hellooo Thereee!!!!!!</p>
    </div>
  );
}
export default App;