import Header from "../../components/Header/Header.tsx";
import axios from "axios";

const Alumnos = () => {
    const getAlumnos = async () => {
        const response = await axios.get("http://localhost:5122/api/uvo/alumnos", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        return response.data;
    }
    return (
        <>
            <div className="flex flex-col min-h-screen p-10">
            <Header />
        <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="font-black text-8xl">Página de alumnos</h1>
            <p className="font-medium text-lg my-5">Esta es la página de alumnos de la universidad</p>
            <div className="bg-gray-300 h-[1px] w-175" ></div>
            <button onClick={getAlumnos} className="mt-5 bg-blue-700 font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition">Obtener Alumnos</button>

        </div>
            </div>
        </>
    );
};

export default Alumnos;