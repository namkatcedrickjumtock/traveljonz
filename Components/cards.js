import React from 'react'





export default function Cards() {
  
    return (
        <div className='container w-50 mx-auto'>
            {data.map(items => {
                return (<div className="card mb-3 border-white bg-light" key={items.title}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={items.imageUrl} alt="..." className='img-fluid w-5' />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-dark font-weight-bold py-3">{items.title}</h5>
                                <p className="card-text">{items.description}</p>
                                {/* <p className="card-text"><small className="text-muted"><i class="bi bi-star" style={iconStarsStyle}></i></small></p> */}
                            </div>

                        </div>

                    </div>
                </div>)
            })}
        </div>
    );
}
