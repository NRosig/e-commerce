import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import FilterButton from "../filter__button/FilterButton";
import { Link, useParams } from "react-router-dom";


const RenderButtons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categorias = useSelector((state) => state.categorias)
  
 

  return (
    <div className="buttons__container">
        {categorias.map(cat => {
            return (
                <Link to={`/${cat}`} >
                    <FilterButton categoria={cat}/>
                </Link>
            )
        })}
    </div>
  )
};

export default RenderButtons;
