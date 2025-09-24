import React from "react";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800 py-8">
      
      <div className="flex flex-col w-full max-w-xl gap-5">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          To-Do List
        </h1>

        <div className="bg-gray-700 rounded-2xl p-5">
          
          <form
            onSubmit
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              className="w-full bg-gray-600 outline-none text-white rounded-lg p-3 flex-1"
              placeholder="Write Something..."
            />

            
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-400 py-3 px-6 rounded-lg text-white font-semibold">
              Add Task
            </button>
          </form>
        </div>
        <div className="bg-gray-700 rounded-2xl p-3">
          <div>
            <input type="checkbox" name="completed" id="" />
            <input type="text"
            value={"msg"}
            className="text-white" />
    
          
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
