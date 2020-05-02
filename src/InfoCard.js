import React from "react";

function InfoCard(props) {
  return (
    <div>
      <figure>
        <img src={props.info.imgSrc} alt="" />
      </figure>
      <h2>{props.info.name}</h2>
      <p>
        <i className="fa fa-graduation-cap" /> {props.info.profession}
      </p>
      <p>
        <i className="fa fa-home" /> {props.info.address}
      </p>
      <p>
        <i className="fa fa-phone" /> {props.info.phone}
      </p>
      <p>
        <i className="fa fa-at" /> {props.info.email}
      </p>
      <hr />
      <p>{props.info.about}</p> <hr />
    </div>
  );
}

export default InfoCard;
