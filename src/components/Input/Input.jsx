import './Input.css'

// Componente que genera un Input para un formulario

// type -> indica el tipo de formulario que se renderizara

// placeholder -> texto que se colocara como indicador del tipo de informacion que
// el usuario debe ingresar

// max -> caracteres maximos que se permiten en el input
// min -> caracteres minimos que se admiten en el input
// id -> ID del input para el formulario

function Input({type,placeholder,max,min, id}){
  return(
    // Desarrollo del componente que pintara el Input de formulario
    <form className='main form-floating mb-3'>
      <input type={type} className='userI form-control' id={id} 
      maxLength={max} minLength={min} autoComplete='true' required/>
      <label htmlFor={id} className='advisor'>{placeholder}</label>
    </form>
    // ------------------------------------------------------------------
  )
};

export default Input;