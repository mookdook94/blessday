import { useState, useEffect } from "react";



export default function CreateJournalPage({newEntry}) {
    
  const [form, setform] = useState("");
  const [saveJournal, setSaveJournal]= useState(false)

  
  
  const handleCheckboxChange = () => {
    setSaveJournal(!saveJournal);
  };

  const handleNewEntry = (evt) => {
    evt.preventDfault();
    if (saveJournal) {

    }
    

  }

 
  

  return (
    <>
    <h2>How is your day</h2>

    <form onSubmit={handleNewEntry}>
        <label>
            How is your day:
            <input type="text" name="mood" placeholder="hmm"/>
        </label>
        <label>
            Talk about it:
            <input type="text" name="textField" placeholder="Its always best to release your feelings" />
        </label>
        <label>
            Would you like to save this:
            <input type="checkbox" name="saveJournal" />
        </label>

        <button>Lets get your scripture of the day</button>
</form>
    </>
  );

  

  
    

    
    
}
















