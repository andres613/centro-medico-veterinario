import { useState } from 'react';

export const Formulario = () => {
    const [nombreMascota, setNombreMascota] = useState('');
    const [holderPet, setHolderPet] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [observations, setObservations] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nombreMascota,
            holderPet,
            email,
            date,
            observations
        }

        if(Object.values(formData).some(v => !v)) return;

        console.log(formData);
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
                onSubmit={handleSubmit} 
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
                        value={nombreMascota}
                        onChange={e => setNombreMascota(e.target.value)}
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
                        value={holderPet}
                        onChange={e => setHolderPet(e.target.value)}
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />  
                    <br />
                    <br />
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Fecha Alta
                    </label>
                    <input
                        id="mascota"
                        type="date"
                        placeholder="Date"
                        className="w-full p-2 mt-2 text-gray-400 border-2 placeholder rounded-md"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />  
                    <br />
                    <br />
                    <label htmlFor="mascota" className="block font-bold text-gray-700 uppercase">
                        Observaciones
                    </label>
                    <textarea
                        className="block w-full p-2 mt-2 font-bold text-gray-700 uppercase border-2 "
                        value={observations}
                        onChange={e => setObservations(e.target.value)}
                    >
                    </textarea>
                </div>
                <input
                    type="submit"
                    className="w-full p-3 font-bold text-white uppercase bg-indigo-600 cursor-pointer hover:bg-indigo-700 transition-colors"
                    value={ 'Agregar Paciente' }
                />
            </form>
        </div>
    );
};
