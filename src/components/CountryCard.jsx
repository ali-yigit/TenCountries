import { Card } from "react-bootstrap";
import { useState } from "react";

const CountryCard = ({ name, native, capital, emoji, currency, languages}) => {
  const [showColor, setShowColor] = useState(false);

const classnames =  `rounded-2 m-auto country-card ${showColor ? "bg-danger" : ""} `;

  return (
    
    <Card
      onClick={()=> setShowColor(!showColor)}
      className={classnames}
      role="button"
      >
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
      <div className="col-12">
        <div className="col-4">Name:</div>
        <div className="col-8">{name}</div>
      </div>

      <div className="col-12">
        <div className="col-4">Native:</div>
        <div className="col-8">{native}</div>
      </div>
      <div className="col-12">
        <div className="col-4">Capital:</div>
        <div className="col-8">{capital}</div>
      </div>
      <div className="col-12">
        <div className="col-4">Emoji:</div>
        <div className="col-8">{emoji}</div>
      </div>
      <div className="col-12">
        <div className="col-4">Currency:</div>
        <div className="col-8">{currency}</div>
      </div>
      <div className="col-12">
        <div className="col-4">Languages:</div>
        <div className="col-8">{languages[0].name}</div> 
        <div className="col-8">{languages[0].code}</div> 
       
     </div>

    </Card>
      
  );
};
export default CountryCard;
