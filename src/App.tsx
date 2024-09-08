
import './App.css'
import { useState } from 'react';
import RandomMessageGenerator from './Components/RandomMessageGenerator';
function App() {
  const thankYouArray = [
    "Thank you so incredibly much for your kindness!",
    "Your support means more to me than words can express. Thank you!",
    "I’m beyond grateful for everything you’ve done. Thank you so much!",
    "From the bottom of my heart, thank you for your generosity!",
    "I can’t begin to tell you how much I appreciate your help. Thank you!",
    "Your thoughtfulness has truly touched me. Many thanks!",
    "I’m deeply thankful for your amazing support and kindness!",
    "Thank you for being such a wonderful blessing in my life!",
    "Your help has made such a difference. Thank you from the core of my being!",
    "You’re a true gem—thank you for everything!",
    "I’m so touched by your kindness. Thanks a million!",
    "Your support is a gift I will always cherish. Thank you so very much!",
    "Thank you for your extraordinary generosity and care!",
    "I’m incredibly grateful for your incredible help and kindness!",
    "You’ve been such a light in my life. Thank you for everything!",
    "I’m so thankful for your amazing support—it means the world to me!",
    "Thank you for being such a kind-hearted and wonderful person!",
    "Your generosity has warmed my heart. Thank you so much!",
    "I’m deeply appreciative of your thoughtfulness and help!",
    "Thank you for your wonderful support—it truly brightened my day!",
    "Your kindness is a treasure I will forever be grateful for. Thanks a ton!",
    "Thank you for being so extraordinary and making a big difference in my life!",
    "I’m so touched by your generosity and support. Thank you from my heart!",
    "Your help has been a true blessing. Thank you with all my heart!",
    "I’m incredibly grateful for your support and kindness. Thank you!",
    "You’ve done so much to make things easier. Thank you for your amazing help!",
    "Your kindness has made my day brighter. Thank you so much!",
    "I’m truly grateful for your support and everything you’ve done for me!",
    "Thank you for your incredible generosity and for always being there!",
    "Your thoughtful gestures mean the world to me. Thank you from the bottom of my heart!",
    "I’m so appreciative of your kindness and the difference it has made!",
    "Thank you for your warm-heartedness and for making a positive impact!",
    "I’m deeply touched by your support. Thank you for being so wonderful!",
    "Your help has been invaluable. Thank you so much for everything!",
    "Thank you for being so supportive and understanding. It means a lot!",
    "Your kindness and generosity are deeply appreciated. Thank you!",
    "I’m so thankful for your help and the positive difference you’ve made!",
    "Thank you for your incredible kindness and the comfort it has brought me!",
    "Your thoughtful actions have made a huge difference. Thank you so much!",
    "I’m sincerely grateful for your amazing support and understanding!",
    "Thank you for your compassionate help and for always being there for me!",
    "Your generosity and kindness have touched me deeply. Thank you!",
    "I’m so thankful for your help—it has meant so much to me!",
    "Thank you for your exceptional kindness and for going above and beyond!",
    "Your support has been a beacon of hope. Thank you from the bottom of my heart!",
    "I’m deeply appreciative of your care and the positive impact you’ve made!",
    "Thank you for being so generous and thoughtful. It truly means a lot!",
    "Your help and kindness are more appreciated than words can express. Thank you!",
    "I’m incredibly thankful for your unwavering support and generosity!",
    "Thank you for your sincere help and for making a difference in my life!",
    "Your kindness has touched me profoundly. Thank you for everything!",
    "I’m so grateful for your support and the warmth you’ve shown!",
    "Thank you for your wonderful kindness and for making my day so special!",
    "Your help has been a true gift. Thank you so very much!",
    "I’m deeply thankful for your support and for always being there!",
    "Thank you for your extraordinary help and the joy it has brought me!",
    "Your generosity and thoughtfulness are truly appreciated. Thank you!",
    "I’m sincerely grateful for your amazing support and care!",
    "Thank you for your incredible kindness and for making a difference!"
];

  const [random,setRandom]=useState(Math.floor(Math.random()*(thankYouArray.length)));
  
   
  return (
    <div className="container">     
      <RandomMessageGenerator messages={[thankYouArray[random]]}></RandomMessageGenerator>
      <button className="glow-on-hover" onClick={()=>setRandom(Math.floor(Math.random()*(thankYouArray.length)))}>Thank You Message</button>  
    </div>
  )
}

export default App
