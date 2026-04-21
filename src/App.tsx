import RegisterForm from "./pages/RegisterForm";

function App (){
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center"> Registrasi Event </h2>
        <RegisterForm />
      </div>
    </div>
  )
}

export default App;