import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'


const DetalleUsuarios = () => {
 
   // validación y leer los datos del formulario
 const formik = useFormik({
   initialValues: {
      id:'', 
      identificacion:'',
      nombre: '',
      cumpleaños: '',
      mes: '',
      direccion: '',
      celular: '',
      email: '',
      password: '',
      zona: '',
      tipo: '',
   }, 
   validationSchema: Yup.object({
      id: Yup.number()
               .min(1, 'Debes agregar un número')
               .required('El id es obligatorio'),
      identificacion: Yup.number()
               .min(1, 'Debes agregar un número')
               .required('La identificacion es obligatoria'),
      nombre: Yup.string()
               .min(3,'Debes agregar un nombre')
               .required('El nombre es obligatorio'), 
      cumpleaños: Yup.date()
               .min(1, 'Debes agregar una fecha')
               .required('Una fecha es obligatoria'),
      mes: Yup.number()
               .min(1, 'Debes agregar un mes')
               .required('El mes de cumpleaños es obligatorio'),
      direccion: Yup.string()
               .min(3,'Debes agregar una dirección')
               .required('La dirección es obligatoria'), 
      celular: Yup.number()
               .min(9, 'Debes agregar un número')
               .required('El número celular es obligatorio'),
      email: Yup.string()
               .min(1, 'Debes agregar un correo')
               .required('El correo es obligatorio'),
      password: Yup.string()
               .min(3,'Debes agregar una contraseña')
               .required('La contraseña es obligatoria'), 
      zona: Yup.string()
               .min(3,'Debes agregar una zona')
               .required('La zona es obligatoria'), 
      tipo: Yup.string()
               .min(3,'Debes agregar un tipo de usuario')
               .required('El tipo de usuario es obligatorio'), 
                   
   }),
   onSubmit: datos => {
     
           console.log(datos);
     
   }
});
   
 
  

       return( 
        <>

           <h1 className="text-3xl font-light mb-4">Detalle usuarios</h1>
        
           <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                      onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="id "  
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            />
                        </div>
                        { formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null }



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identificacion"
                                type="number"
                                placeholder="identificacion " 
                                value={formik.values.identificacion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}   
                            />
                        </div>
                        { formik.touched.identificacion && formik.errors.identificacion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.identificacion} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre "
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                             
                            />
                        </div>
                        { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha cumpleaños</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cumpleaños"
                                type="date"
                                placeholder=""   
                                value={formik.values.cumpleaños}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.cumpleaños && formik.errors.cumpleaños ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.cumpleaños} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="mes"
                                type="number"
                                placeholder="mes de cumpleaños"   
                                value={formik.values.mes}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.mes && formik.errors.mes ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.mes} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="direccion"
                                type="text"
                                placeholder="direccion"
                                value={formik.values.direccion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.direccion && formik.errors.direccion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.direccion} </p>
                            </div>
                        ) : null }

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="celular"
                                type="number"
                                placeholder="Telefono Celular"
                                value={formik.values.celular}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.celular && formik.errors.celular ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.celular} </p>
                            </div>
                        ) : null }

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Correo Electrónico"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null }

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Contraseña"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.password} </p>
                            </div>
                        ) : null }

                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zona"
                                type="text"
                                placeholder="Zona"
                                value={formik.values.zona}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.zona && formik.errors.zona ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.zona} </p>
                            </div>
                        ) : null }

                        <div>
                           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo Usuario</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="tipo"
                                type="text"
                                placeholder="Tipo Usuario"
                                value={formik.values.tipo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.tipo && formik.errors.tipo ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.tipo} </p>
                            </div>
                        ) : null }

                        <input
                            type="submit"
                            className="bg-green-700 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar usuario"
                        />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default DetalleUsuarios;