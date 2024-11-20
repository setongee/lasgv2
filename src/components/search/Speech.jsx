import React, {useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './speech.scss'

import mic from '../../assets/icons/mics/mic.svg'
import micOpen from '../../assets/icons/mics/mic-open.svg'
import { MicrophoneSolid, MicrophoneSpeakingSolid } from 'iconoir-react';

const Dictaphone = ({setSpeechQuery}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    
    setSpeechQuery(transcript)
    
  }, [transcript]);
  
  if (!browserSupportsSpeechRecognition) {
    alert("Browser doesn't support speech recognition.")
  }

  return (
    <div className='mic__holder'>

        {
            listening ? <div className="toast_message"> <MicrophoneSpeakingSolid/> Mic On - Listening... </div> : null
        }
        
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