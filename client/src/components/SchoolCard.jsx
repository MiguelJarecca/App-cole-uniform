import { NavLink } from 'react-router-dom';
import { useSchool } from '../hooks/useSchool';

export const SchoolCard = ({ school }) => {

    const { handlerRemoveSchool } = useSchool();

    const onSelectedSchool = (id) => {
        handlerRemoveSchool(id);
    }

    return (

         <div className="box-cole">
            <div className="div-content">
                <p>COLEGIO</p>
                <h2>{school.name}</h2>
                {/* <h4>{school.address}</h4> */}
                {/* <h5>{school.image.name}</h5> */}

                <NavLink to={"/school/update/" + school.id}> Actualizar</NavLink>

                <button
                    type='submit'
                    onClick={() => onSelectedSchool(school.id)}
                    >
                    Eliminar
                </button>
                
                <NavLink to={"/uniforms"}>Ver Catálogo </NavLink>

            </div>
            
            <div className="div-img">
                <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
            </div>
        </div>

    )
}