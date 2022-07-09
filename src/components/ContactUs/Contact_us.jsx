import "./contact.css";
import ImagePath from '../../images/ex.jpeg'

export default function Contact_us() {
    return(
        <div>
       
        <div className='container'>
            <div className='row'>
            <img src={ImagePath} />
            <div className="contactTitle">
        <span className="headerTitleSm"> Let's connect with us..</span>
        </div>
                <div className='col-md-8 formbody'> 
                <form >
  <div className="row">

  <div className="form-group col-md-6">
      <label for="input2">First Name</label>
      <input type="first name" className="form-control forminput" id="input2" placeholder="First Name"/>
    </div>
    
    <div className="form-group col-md-6">
      <label for="input3">Last Name</label>
      <input type="last name" className="form-control forminput" id="input3" placeholder="Last Name"/>
    </div>

    <div className="form-group">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control forminput" id="inputEmail4" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="row">
    <div className="form-group col-md-4">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-4">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn  btn-block  w-100 btn-primary">Submit</button>
</form>
                </div>
                <div className='col-md-4'>
                    
                </div>
            </div>

        </div>
        </div>
    );
}