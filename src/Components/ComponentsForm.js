import React, {useState} from 'react'


export default function ComponentsForm(props) {
  const HandleUpClick = ()=>
  {
      console.log("UPPERCASE WAS CLICKED"+ Text)
      let newtext = Text.toUpperCase();
      setText(newtext);
  }
  const handleOnChange = (event)=>{
    console.log("HANDLEONCHANGE")
    setText(event.target.value)
  }
  const HandlelowClick = ()=>
  {
    console.log("LOWERCASE WAS CLICKED"+ Text)
    let newtext = Text.toLocaleLowerCase();
    setText(newtext);
  }
  const[Text, setText] = useState("ENTER TEXT HERE2");
  return (
   <>
   <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={HandleUpClick}> CONVERT IN UPPERCASE</button>
        <button className='btn btn-success' onClick={HandlelowClick}>CONVERT IN LOWERCASE</button>
  </div>
  <div className="container my-3">
  <h1>YOUR TEXT SUMMARY</h1>
  <p>NO OF WORDS{Text.split(" ").length} LENGTH OF WORDS{Text.length}</p>
  <p>{0.08 * Text.split(" ").length} Time to read</p>
  <h2>PREVIEW</h2>
  <p>{Text}</p>
  </div>
   </>
  )
}