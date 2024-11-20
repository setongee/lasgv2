import React, {useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './speech.scss'

import mic from '../../assets/icons/mics/mic.svg'
import micOpen from '../../assets/icons/mics/mic-open.svg'
import { MicrophoneSolid, MicrophoneSpeakingSolid } from 'iconoir-react';

const Dictaphone = ({setSpeechQuery, checkMic}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    
    setSpeechQuery(transcript);
    
  }, [transcript]);

  useEffect(() => {
    
    checkMic(transcript);

    if (listening) {

      document.querySelector('.toast_message').style.display = "flex"

      console.log(document.querySelector('.toast_message'))

    } else if( transcript !== '' ) {

      setTimeout(() => {

        document.querySelector('.toast_message').style.display = "none"
        
      }, 2500);

    }


  }, [listening]);

  
  if (!browserSupportsSpeechRecognition) {
    alert("Browser doesn't support speech recognition.")
  }

  return (
    <div className='mic__holder'>

        <div className="toast_message">

          <div className="micIcon listening" id='mic'> 
            <MicrophoneSpeakingSolid/> 
          </div> 

         "Speak Now..."

        </div>

        <div className="trigger__mic">

            { listening ? <div className="mic listen" onClick={SpeechRecognition.stopListening} ><MicrophoneSpeakingSolid /></div> : <div className="mic" onClick={SpeechRecognition.startListening} ><MicrophoneSolid /></div> }

        </div>

      {/* <button onClick={SpeechRecognition.startListening}></button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p> */}
    </div>
  );
};
export default Dictaphone;