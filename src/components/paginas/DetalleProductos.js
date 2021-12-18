import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const DetalleProductos = (   ) => {


       // validación y leer los datos del formulario
 const formik = useFormik({
   initialValues: {
      referencia:'', 
      marca:'',
      categoria: '',
      materiales: '',
      dimensiones: '',
      descripcion: '',
      disponibilidad: '',
      precio: '',
      cantidad: '',
      fotografia: '',
   }, 
   validationSchema: Yup.object({
      referencia: Yup.string()
               .min(1, 'Debes agregar una referencia')
               .required('La referencia es obligatoria'),
      marca: Yup.string()
               .min(1, 'Debe agregar una marca')
               .required('La marca es obligatoria'),
      categoria: Yup.string()
               .min(3,'Debes agregar una categoría')
               .required('La categoría es obligatoria'), 
      materiales: Yup.string()
               .min(1, 'Debes agregar los materiales')
               .required('Los materiales son obligatorios'),
      dimensiones: Yup.string()
               .min(1, 'Debes agregar las dimensiones')
               .required('Las dimensiones son obligatorias'),
      descripcion: Yup.string()
               .min(3,'Debes agregar una descripción')
               .required('La descripción es obligatoria'), 
      disponibilidad: Yup.string()
               .min(1, 'Debes agregar la disponibilidad')
               .required('La disponibilidad es obligatoria'),
      precio: Yup.number()
               .min(1, 'Debes agregar un precio')
               .required('El precio es obligatorio'),
      cantidad: Yup.string()
               .min(3,'Debes agregar una cantidad')
               .required('La cantidad es obligatoria'), 
      fotografia: Yup.string()
               .min(3,'Debes agregar una fotografía')
               .required('La fotografía es obligatoria'), 
                   
   }),
   onSubmit: datos => {
     
           console.log(datos);
     
   }
});
   
 
  

       return( 
        <>

           <h1 className="text-3xl font-light mb-4">Detalle Productos</h1>
        
           <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Referencia</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="referencia"
                                type="text"
                                placeholder="Referencia"  
                                value={formik.values.referencia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            />
                        </div>
                        { formik.touched.referencia && formik.errors.referencia ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.referencia} </p>
                            </div>
                        ) : null }



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Marca</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="marca"
                                type="text"
                                placeholder="Marca" 
                                value={formik.values.marca}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}   
                            />
                        </div>
                        { formik.touched.marca && formik.errors.marca ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.marca} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Categoría</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="categoria"
                                type="text"
                                placeholder="Categoría"
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                        { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.categoria} </p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Materiales</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="materiales"
                                type="text"
                                placeholder="Materiales"   
                                value={formik.values.materiales}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.materiales && formik.errors.materiales ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.materiales} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dimensiones</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dimensiones"
                                type="text"
                                placeholder="Dimensiones"   
                                value={formik.values.dimensiones}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.dimensiones && formik.errors.dimensiones ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.dimensiones} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Descripción</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="descripcion"
                                type="text"
                                placeholder="Descripción"
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.descripcion} </p>
                            </div>
                        ) : null }

                        <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Disponibilidad</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="disponibilidad"
                                type="text"
                                placeholder="Disponibilidad"
                                value={formik.values.disponibilidad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                            { formik.touched.disponibilidad && formik.errors.disponibilidad ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.disponibilidad} </p>
                            </div>
                            ) : null }

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Precio</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="precio"
                                type="number"
                                placeholder="Precio"
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                            { formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.precio} </p>
                            </div>
                            ) : null }
                        
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Cantidad</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cantidad"
                                type="text"
                                placeholder="Cantidad"
                                value={formik.values.cantidad}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                            { formik.touched.cantidad && formik.errors.cantidad ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.cantidad} </p>
                            </div>
                            ) : null }
                        
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fotografía</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fotografia"
                                type="text"
                                placeholder="Fotografía"
                                value={formik.values.fotografia}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.fotografia && formik.errors.fotografia ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.fotografia} </p>
                            </div>
                        ) : null }

                        <input
                            type="submit"
                            className="bg-green-700 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar producto"
                        />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default DetalleProductos;