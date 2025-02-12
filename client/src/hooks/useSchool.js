
import { findAll, remove, save, update } from "../services/schoolService";
import { useDispatch, useSelector } from 'react-redux';
import { addSchool, initialSchoolForm, removeSchool, updateSchool, 
    loadingSchools } from "../store/slices/schools/schoolsSlice";

export const useSchool = () => {

    const { schools } = useSelector(state => state.schools)
    const dispatch = useDispatch();

    // console.log("list de cole " +JSON.stringify(schools.name, null, 2));

    //Funcion para traer todos los colegios
    const getSchools = async() => {
        try {
            const result = await findAll();
            dispatch(loadingSchools(result.data));
            
        } catch (error) {
            console.error(error);
        }
    }

    //Funcion para crear el colegio
    const handlerAddSchool = async(formData) => {
        const response = await save(formData);
        dispatch(addSchool({ ...response.data }));
        console.log("control handler school " +JSON.stringify(response.data, null, 2));
    };

    const handlerUpdateSchool = async(formData, id) => {
        const response = await update(formData, id);
        if(response && response.data) {
            dispatch(updateSchool({ ...response.data }));
        } else {
            // Maneja el caso donde la respuesta no es lo que esperabas
            console.error('La actualización falló o no devolvió datos');
        }
      
    };

    const handlerRemoveSchool = async(id) => {
        await remove(id);
        dispatch(removeSchool(id));
    };

    // const handlerSchoolSelectedForm = (formData) => {
    //     dispatch(onSchoolSelectedForm({ ...formData }));
    // }

    // Devuelve los datos de las escuelas junto con las funciones para modificarlos.
    return (
        {
        schools,
        initialSchoolForm,

        getSchools,
        handlerAddSchool,
        handlerUpdateSchool,
        handlerRemoveSchool,
        }
    )
};


