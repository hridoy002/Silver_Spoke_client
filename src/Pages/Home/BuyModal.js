import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const BuyModal = ({ buy,setBuy }) => {
    const [user] = useAuthState(auth);
    const [buyQuantity,setBuyQuantity] = useState(0);
    const [disable,setDisable] = useState(false);    
    
    if(user){
        console.log(user)
    }
    
    const handleForm = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        
        const orderBooking = {
            product: buy.name,
            quantity: quantity,
            name: user.displayName,
            email: user.email,
            address: address,
            phone: phone 
        }
        fetch('http://localhost:5000/order', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(orderBooking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data) 
        if(data.success){
          console.log('Your order is proceed')
        }
      

       
        setBuy(null)
       
        
      })
    
    }
    return (
    <div >
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <p className="py-4 text-center font-bold text-xl">Give Your Details</p>
                    <div >
                        <form className='grid place-items-center' onSubmit={handleForm} action="">
                            <input type="text" value={buy.name}  disabled className="input input-bordered w-full max-w-xs mb-3" />
                            {/* quantity  */}
                            <input type="number"   name="quantity" placeholder="Quantity" className="input input-bordered w-full max-w-xs mb-3" />

                            <input type="text" value={user?.displayName} placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs mb-3" />

                            <input type="text" value={user?.email} placeholder="Email" className="input input-bordered w-full max-w-xs mb-3" />

                            <input type="text" name='address'  placeholder="Address" className="input input-bordered w-full max-w-xs mb-3" />

                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs mb-3" />
                            <input  type="submit" value="Proceed" className="input input-bordered w-full max-w-xs bg-primary font-bold text-lg text-white" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;