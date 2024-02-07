import Swal from 'sweetalert2';
import './NuevoProducto.css'
import {useForm} from 'react-hook-form'


const NuevoProducto = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try {
          const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            reset()
            return(
                Swal.fire({
                    icon: "success",
                    title: "Done",
                    text: "Producto agregado con éxto",
                  }));
          } else {
            return(
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al agregar el producto",
              }));
          }
        } catch (error) {
          console.error('Error al agregar el producto:', error);
        }
      };

  return (
    <>
        <div className="container">
            <h2 className="titulo mt-4">Nuevo producto</h2>
        </div>
        <div className='container'>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                <input {...register('producto' , {
                    required: 'Campo requerido',
                    minLength: {
                        value: 4,
                        message: 'Min lenght 4'
                    },
                    maxLength: {
                        value: 20,
                        message: 'Max lenght 20'
                    }
                    })} placeholder='Producto*' className='input'/>
                <p className='m-0 mx-2 errores'>{errors.producto?.message}</p>
                <input type='number' min={100} max={2000} {...register('precio', {
                    required: 'Campo requerido',
                    min: {
                        value: 100,
                        message: 'El precio debe ser al menos 100 ARS',
                      },
                      max: {
                        value: 2000,
                        message: 'El precio debe ser como máximo 2000 ARS',
                      },
                    })} placeholder='Precio*' className='input'/>
                <p className='m-0 mx-2 errores'>{errors.precio?.message}</p>
                <input {...register('url', {
                    required: 'Campo requerido',
                    pattern: {
                        value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                        message: 'Ingresa una URL válida',
                      },
                    })}  placeholder='Imagen URL*' className='input'/>
                <p className='m-0 mx-2 errores'>{errors.url?.message}</p>
                <select {...register('categoria', {required: 'Campo requerido'})} className='input'>
                    <option value="">Selecciona una opción*</option>
                    <option value="Bebida Caliente">Bebida Caliente</option>
                    <option value="Bebida Fria">Bebida Fria</option>
                    <option value="Galleta">Galleta</option>
                    <option value="Factura">Factura</option>
                </select>
                <p className='m-0 mx-2 errores'>{errors.categoria?.message}</p>
                <input {...register('descripcionBreve', {
                    required: 'Campo requerido',
                    minLength: {
                        value: 10,
                        message: 'Min lenght 10'
                    },
                    maxLength: {
                        value: 144,
                        message: 'Max lenght 144'
                    }
                    })}  placeholder='Descripción Breve*' className='input'/>
                <p className='m-0 mx-2 errores'>{errors.descripcionBreve?.message}</p>
                <input {...register('descripcionAmplia', {
                    required: 'Campo requerido',
                    minLength: {
                        value: 10,
                        message: 'Min lenght 10'
                    },
                    maxLength: {
                        value: 300,
                        message: 'Max lenght 300'
                    }
                    })}  placeholder='Descripción Amplia*' className='input'/>
                <p className='m-0 mx-2 errores'>{errors.descripcionAmplia?.message}</p>
                <button className='btn btn-success w-25 mt-4' type='submit'>Guardar</button>
            </form>
        </div>
    </>
  )
}

export default NuevoProducto