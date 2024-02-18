import React, { useState } from 'react';
 import { setSessionPassword } from '../utils/utils';
 
 const styles = {
   wrapper: {
     height: '100vh',
     background: '#FFFFFF',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
   },
   input: {
     width: '100%',
     height: '48px',
     borderRadius: '4px'
   },
   button: {
     width: '100%',
     height: '48px',
     background: '#BF5700',
     color: '#FFFFFF',
     border: '1px solid #BF5700',
     borderRadius: '4px',
     marginTop: '16px',
     textTransform: 'uppercase',
     fontWeight: '300',
     fontFamily: 'sans-serif'
   },
   buttonHover: {
     background: '#333f48',
     color: '#000000'
   },
   link: {
     color: '#333f48',
     fontFamily: 'sans-serif'
   },
   linkHover: {
     color: 'dodgerblue'
   }
 };
 
 const PasswordProtect = () => {
   const [password, setPassword] = useState('');
   const [isButtonHovered, buttonHover] = useState(false);
   const [isThemeHovered, themeHover] = useState(false);
   const [isSiteHovered, siteHover] = useState(false);
 
   const onSubmit = event => {
     event.preventDefault();
     setSessionPassword(password);
     window.location.reload(); // eslint-disable-line
   };
 
   return (
     <div style={styles.wrapper}>
       <h4 style={{ color: '#333f48' }}>Enter Password</h4>
 
       <form onSubmit={onSubmit} style={{ width: '320px' }}>
         <input
           name="password"
           type="password"
           value={password}
           onChange={event => setPassword(event.target.value)}
           style={styles.input}
         />
 
         <button
           type="submit"
           style={{
             ...styles.button,
             ...(isButtonHovered ? styles.buttonHover : null)
           }}
           onMouseEnter={() => buttonHover(true)}
           onMouseLeave={() => buttonHover(false)}
         >
           Enter
         </button>
       </form>
     </div>
   );
 };
 
 export default PasswordProtect;
 