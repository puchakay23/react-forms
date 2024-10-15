import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import React,{useState} from "react"

function App() {
  
  const [formData,setFormData] = useState({firstName:"",lastName:"",email:"",country:"India",
    address:"",city:"",state:"",pinCode:"",comments:false,candicates:false,offers:false,notifications:""
  });
  function changeHandler(event){
    const {name,value,checked,type} = event.target;
      setFormData(formData => {
        return{
          ...formData,
          [name]: type==="checkbox"? checked:value
      }
        
      })
  }

  function saveHandler(event){
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div>
      <form onSubmit={saveHandler}>
      
        <label htmlFor='firstName'>First name</label><br/>
        <input 
        type='text'
        placeholder='Pranay'
        name='firstName'
        id='firstName'
        onChange={changeHandler}
        />
        <br/>

        <label htmlFor='lastName'>last name</label><br/>
        <input 
        type='text'
        placeholder='Gupta'
        name='lastName'
        id='lastName'
        onChange={changeHandler}
        />
        <br/>

        <label htmlFor='email'>Email Address</label><br/>
        <input 
        type='email'
        placeholder='shgjc@Gupta.com'
        name='email'
        id='email'
        onChange={changeHandler}
        />
        <br/>

        <label htmlFor='country'>Country</label><br/>
        <select 
        name='country'
        id='country'
        onChange={changeHandler} >
        <option>India</option>
        <option>USA</option>
        <option>Canada</option>
        <option>Dubai</option>
        </select>

        <br/>
        <label htmlFor='address'>Street Address</label><br/>
        <input 
        type='text'
        placeholder='1234 Main st'
        name='address'
        id='address'
        onChange={changeHandler}
        />
        <br/>

        <label htmlFor='city'>City</label><br/>
        <input 
        type='text'
        placeholder='Guntur'
        name='city'
        id='city'
        onChange={changeHandler}
        />

        <br/>
        <label htmlFor='state'>State/Province</label><br/>
        <input 
        type='text'
        placeholder='AP'
        name='state'
        id='state'
        onChange={changeHandler}
        />
        <br/>

        <label htmlFor='pinCode'>ZIP/Postal code</label><br/>
        <input 
        type='text'
        placeholder='522019'
        name='pinCode'
        id='pinCode'
        onChange={changeHandler}
        />

        <br/>
        <h4>By Email</h4>
        <input 
        type='checkbox'
        onChange={changeHandler}
        name='comments'
        id='comments'
        checked={formData.comments}
        />
        <label htmlFor='comments'>Comments</label>
        <br/>
        
        <input 
        type='checkbox'
        onChange={changeHandler}
        name='candicates'
        id='candicates'
        checked={formData.candicates}
        />
        <label htmlFor='candicates'>Candicates</label>
        <br/>
        
        <input 
        type='checkbox'
        onChange={changeHandler}
        name='offers'
        id='offers'
        checked={formData.offers}
        />
        <label htmlFor='offers'>Offers</label>
        <br/>

        <h4>Push Notifications</h4>
        <p>These are delivered via SMS to your mobile phone</p>
        
        <input
        type='radio'
        onChange={changeHandler}
        name="notifications"
        value="everything"
        id='everything'
        checked={formData.notifications==="everything"}
        />
        <label htmlFor='everything'>Everything</label><br/>

        <input
        type='radio'
        onChange={changeHandler}
        name="notifications"
        value="Same as Email"
        id='Same as Email'
        checked={formData.notifications==="Same as Email"}
        />
        <label htmlFor='Same as Email'>Same as Email</label><br/>

        <input
        type='radio'
        onChange={changeHandler}
        name="notifications"
        value="No Push Notifications"
        id='No Push Notifications'
        checked={formData.notifications==="No Push Notifications"}
        />
        <label htmlFor='No Push Notifications'>No Push Notifications</label>

        <br/>
        <button>Save</button>



    </form>
    </div>
  )
}

export default App;
