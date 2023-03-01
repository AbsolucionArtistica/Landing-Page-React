import React from "react";

function Card({img, description, button}) {
    return(
        <div className= "col-12 col-sm-6 col-md-3 p-3">
            <div className="card text-center">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">{button}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;