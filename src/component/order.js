import Link3 from "../router/link";

function Order() {
    return (
        <div className="outer-container">
            <div>
                <Link3 />
            </div>
            <div className="order">
                <form >
                    <h1>Register</h1>
                    <div className="order1">
                        <label for="">FirstName</label>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div className="order1">
                        <label for="">LastName</label>
                        <input type="text" id="username" name="username"/>
                    </div>
                    <div className="order1">
                        <label for="">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="order1">
                        <label for="">Pickup Date</label>
                        <input type="date"  required />
                    </div>
                    <div className="order1">
                        <label htmlFor="flavor">Flavor</label>
                        <select id="flavor" name="flavor">
                        <option ></option>

                            <option >French Vanilla</option>
                            <option>Chocolate</option>
                            <option >Red Velvet</option>
                        </select>
                    </div>
                    <div className="order1">
                        <label htmlFor="country">Filling</label>
                        <select >
                            <option >Strawberry</option>
                            <option >Chcolate</option>
                            <option >Rasberry</option>
                            <option >Vannila</option>
                            <option >White Chcolate</option>
                        </select>
                    </div>
                    <div className="order1">
                        <label>Next Pickup/Delivery Date</label>
                        <div>
                            <label>
                                <input type="radio"  />
                                Today
                            </label>
                            <label>
                                <input type="radio" />
                                Tomorrow
                            </label>
                        </div>
                    </div>
                    <div className="order1">
                        <label htmlFor="tiers">Number of Tiers</label>
                        <input type="text"  />
                    </div>
                   
                    <div className="order1">
                        <label htmlFor="image">Upload Image</label>
                        <input type="file"  />
                    </div>
                    <div className="order1">
                        <label htmlFor="additional_notes">Additional Notes</label>
                        <textarea ></textarea>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Order;
