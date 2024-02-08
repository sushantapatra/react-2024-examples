import React, { useCallback, useEffect, useState } from 'react';
const Create = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        gender:"",
        country:"",
        state:""
    })
    const [countries, setCountry]=useState([])
    const [states, setState]=useState([])
    const inputEvent=(e)=>{
        const {name, value} =e.target
        setUser((prevData) =>{
            return {
                ...prevData,
                [name]:value
            }
        })
        if(name == 'country'){
            getAllStateByCountryName(value);
        }
        
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(user);

        // setUser({
        //     name:"",
        //     email:"",
        //     phone:"",
        //     gender:"",
        //     country:"",
        //     state:""
        // })
    }

    const getAllCountry = useCallback(async () => {
        try {
            // Make a GET request to the API endpoint
            // const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
            const response = await fetch('http://localhost/codesikho/api/countrylist');
            // Check if the response is successful (status code 200)
            if (response.ok) {
                // Parse the JSON response body
                const jsonData = await response.json();
                // Update the state variable with the fetched data
                setCountry(jsonData.data);
            } else {
                // Handle error responses
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error('Error fetching data:', error);
        }
    }, [user.country,setUser]);

    const getAllStateByCountryName = useCallback(async (countryName) => {
        try {
            // Make a GET request to the API endpoint
            // const response = await fetch('https://countriesnow.space/api/v0.1/countries/states', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({country: countryName})
            // });
            const response = await fetch('http://localhost/codesikho/api/statelistByCountry/'+countryName);
            // Check if the response is successful (status code 200)
            if (response.ok) {
                // Parse the JSON response body
                const jsonData = await response.json();
                // Update the state variable with the fetched data
                setState(jsonData.data);
            } else {
                // Handle error responses
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error('Error fetching data:', error);
        }
    }, [user.country,setUser]);
    useEffect(() => {
        getAllCountry();
    }, [])
    
    return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 mx-auto my-4">
                    <h1>User Registration</h1>
                    <form className="g-3 align-items-center" onSubmit={handleSubmit}> 
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="name" value={user.name} onChange={inputEvent}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com"  name="email" onChange={inputEvent} value={user.email}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="phone" name="phone" onChange={inputEvent} value={user.phone}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="gender" className="form-label">Gender</label>
                                <div className="mb-3 ">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Male" name="gender" onChange={inputEvent} checked={user.gender === 'Male' ? true : false}/>
                                        <label className="form-check-label" htmlFor="gender">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Female" name="gender" onChange={inputEvent} checked={user.gender === 'Female' ? true : false}/>
                                        <label className="form-check-label" htmlFor="gender">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="Other" name="gender" onChange={inputEvent} checked={user.gender === 'Other' ? true : false}/>
                                        <label className="form-check-label" htmlFor="gender">Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="form-select" aria-label="Default select example" name="country" onChange={inputEvent} value={user.country}>
                                        <option value="">__Country__</option>
                                        {
                                           countries?.map((curVal) =>(
                                            <option value={curVal.COM_COCD} key={curVal.COM_COCD}>{curVal.COM_CONM}</option>
                                           )) 
                                        }
                                     
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" aria-label="Default select example" name="state" onChange={inputEvent} value={user.state}>
                                        <option value="">__State__</option>
                                        {
                                           states?.map((curVal) =>(
                                            <option value={curVal.STM_STCD} key={curVal.STM_STCD}>{curVal.STM_STNM}</option>
                                           )) 
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
    </>
    )
}

export default Create