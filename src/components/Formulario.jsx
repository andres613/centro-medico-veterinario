import { useRef } from 'react';
import { useSerializeFormData } from '../hook/useSerializeFormData';
import { useValidateFormData } from '../hook/useValidateFormData';

export const Formulario = () => {
    const form = useRef(null);
    const { serialize } = useSerializeFormData();
    const { validate } = useValidateFormData();

    const handleSubmit = () => {
        const formData = serialize(form.current);

        if(!validate(formData)) {
            alert("Faltan campos por diligenciar");
            return;
        }

        sendData(formData);

        resetFields(formData, form.current);
    }

    const sendData = (data) => {
        console.log(data)
    }

    const resetFields = (formData, form) => {
        Object.entries(formData).forEach(([key, value]) => {
            form.elements[key].value = "";
        });
    }

    return (
        <div className="mx-5 md:w-1/2 lg:w-2/5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="mt-5 mb-10 text-lg text-center">
                Añade Pacientes y {''}
                <span className="font-bold text-indigo-600 ">Administralos</span>
            </p>
            {/* formulario */}
            <form
                ref={form}
                className="px-5 py-10 mb-10 bg-white rounded-lg shadow-md"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
                        // value={nombreMascota}
                        // onChange={e => setNombreMascota(e.target.value)}
                        name="mascota"
                    />  
                    <br />
                    <br />
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Nombre Tenedor
                    </label>
                    <input
                        id="holdersPet"
                        type="text"
                        placeholder="Nomber Tenedor"
                        className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
                        // value={holderPet}
                        // onChange={e => setHolderPet(e.target.value)}
                        name="holdersPet"
                    /> 
                    <br />
                    <br />
                    <label htmlFor="Email" className="block font-bold text-gray-700 uppercase">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="w-full p-2 mt-2 placeholder-gray-400 border-2 rounded-md"
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        name="email"
                    />  
                    <br />
                    <br />
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        type="date"
                        placeholder="Date"
                        className="w-full p-2 mt-2 text-gray-400 border-2 placeholder rounded-md"
                        // value={date}
                        // onChange={e => setDate(e.target.value)}
                        name="date"
                    />  
                    <br />
                    <br />
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Observaciones
                    </label>
                    <textarea
                        className="block w-full p-2 mt-2 font-bold text-gray-700 uppercase border-2 "
                        // value={observations}
                        // onChange={e => setObservations(e.target.value)}
                        name="observations"
                    >
                    </textarea>
                </div>
                {/* <input
                    type="submit"
                    className="w-full p-3 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-colors"
                    value={ 'Agregar Paciente' }
                /> */}
                <button 
                    type="button"
                    onClick={handleSubmit}
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                >
                    Agregar Paciente
                </button>
            </form>
        </div>
    );
};
