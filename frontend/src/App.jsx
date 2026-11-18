import './App.css';
import { useState } from "react";
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import Loader from './Loader';

function App() {
  const [question, setquestion] = useState('');
  const [data, setdata] = useState("");
  const [loading, setloading] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !question.trim() || loading) return;

    setloading(true);
    setdata("");

    axios.post(`http://localhost:3000/ask`, { question })
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        if (finalRes._status) {
          setdata(finalRes.finalData);
        }
      })
      .catch((err) => {
        console.error(err);
        setdata("Error: Failed to fetch response from server.");
      })
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">Gemini AI ChatBot</h1>

      <div className="max-w-330 border mx-auto grid grid-cols-[25%_auto] gap-5 p-5">
        <form onSubmit={handleSubmit} className="shadow-lg py-4">
          <textarea
            value={question}
            onChange={(e) => setquestion(e.target.value)}
            placeholder="Ask something..."
            className="w-full h-50 border-2 p-3 resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white w-full py-4 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Asking...' : 'Ask Something'}
          </button>
        </form>

        <div className="border-l border-gray-300">
          <div className="h-75 text-left overflow-y-auto p-4">
            {loading ? (
              <Loader />
            ) : data ? (
              <div className="markdown-body">
                <ReactMarkdown>{data}</ReactMarkdown>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full text-gray-400">
                Response will appear here...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
