import React,{useState} from 'react';

const StandardMessageForm = () => {
    const [message,setMessage]=useState("");
    const [attachment,setAttachment]=useState("");
    const [preview,setPreview] = useState("");
  return (

    <div className='message-form-preview'>
      <img src={preview} alt="message-form-preview" className='message-form-preview-image' onLoad={() => URL.revokeObjectURL(preview)} />
      {/* <XMarkIcon className="message-form-icon-x" onClick={() => {
        setPreview("");
        setAttachment("");
      }}/> */}
      <div>message form</div>   
    </div>
  )
}

export default StandardMessageForm
