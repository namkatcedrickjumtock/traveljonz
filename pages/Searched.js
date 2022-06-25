import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Searched = () => {

    const [CountryFields, setCountryFields] = useState('');
    const [state, setStateFields] = useState('');

    useEffect((e) => {
        if (CountryFields >= 3) {
            console.log("use Effect worked on changed");
        } else {
            return
        }
        return () => {
            cleanup
        };
    }, [CountryFields]);

    const HandleSubmit = (e) => {
        e.preventDefault();
        const formData = { CountryFields, state }
        console.log(formData)



    }

    return (
        <div className='container'>
            <img src="/img/search-img.svg" alt="" className="mx-auto d-block  py-4" height={'300vh'} width={'100%'} />
            <form className='py-3' onSubmit={HandleSubmit}>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <input
                            value={CountryFields}
                            type="search"
                            onChange={(e) => setCountryFields(e.target.value)}
                            className="form-control shadow-none"
                            placeholder="Country" aria-label="Search" />
                        <small className="text-muted">{CountryFields}</small>
                    </div>
                    <div className="col-md-4">
                        <input type="search"
                            value={state}
                            className="form-control shadow-none"
                            onChange={(e) => setStateFields(e.target.value)}
                            placeholder="State" aria-label="Search" />
                        <small className="text-muted">{state}</small>

                    </div>
                </div>
                <button className=" btn btn-outline-primary mx-auto d-block my-3 w-25 disable" type='submit'>search</button>
            </form>
        </div>
    );
}

export default Searched;
