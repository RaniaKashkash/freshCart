import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Ratings({ratings}) {

  function getStarsIcon(position){
    if(ratings >= position){
      return faStar
    }else if(ratings>= position-0.5){
      return faStarHalfStroke
    }else{
      return regularStar

    }
  }
  return<>
  <div className="stars text-yellow-400">
    {
      [1,2,3,4,5].map((position)=><FontAwesomeIcon key={position} icon={getStarsIcon(position)}/> )
    }
  </div>
  </>
}
