import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardShow from "../components/CardShow";

function Show() {
    const { title } = useParams();
    function capitalizeSentences(title) {
    return title
        .split(' ') // Memisahkan kalimat berdasarkan titik dan spasi
        .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)) // Mengubah huruf pertama setiap kalimat menjadi kapital
        .join(' '); // Menggabungkan kalimat kembali
    }
    const capitailzeTitle = capitalizeSentences(title);


    const [page, setPage] = useState(1);
    const [quotes, setQuotes] = useState([]);

    const upPage = () => {
        setPage((prev) => prev + 1);
    }
     const downPage = () => {
        setPage(prev => Math.max(prev - 1, 1)); // Tidak bisa lebih kecil dari 1
    };
   
    useEffect(() => {
        const tampilQuotes = async () => {
            try {
                const response = await axios.get(`https://katanime.vercel.app/api/getbyanime?anime=${title}&page=${page}`);
                setQuotes(response.data.result);
                console.log(response);
                console.log("OK");
            } catch (error) {
                console.log("Error fetching Data,", error);
            }
        };

        tampilQuotes();
    }, [title, page]);


    return (
        <div>
            <nav className='bg-darkBlue m-0 p-5 flex flex-row justify-center gap-4'>
            <a href="/" className="text-white fill-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"/></svg></a>
        <h1 className='text-slate-100 text-center font-sans text-xl font-bold'>{capitailzeTitle}</h1>
      </nav>
        <div className='mx-auto w-10/12 md:w-8/12 py-3'>
         <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {
                quotes.length > 0 ? (
                    quotes.map(item => (
                        <CardShow key={item.id} english={item.english} indo={item.indo} character={item.character} anime={item.anime} />
                    ))
                ) : 
                <p>Lagi ngeload data, kalo lama berarti data ngga ada.</p>
            }
         </div>

          <div className="flex my-3 w-full justify-between">
           <button onClick={downPage} className={`${page === 1 ? 'opacity-0' : 'opacity-100'} btn btn-warning`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg> Prev
            </button>   
            <button onClick={upPage} className="btn btn-warning">
                Next <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
            </button>
        </div>
        
        </div>
        
        <footer className="bg-grayishBlue text-center w-full p-4">
                <a className="font-bold text-lg" href="https://ynzhiao.my.id">
                    Afif Waliyudin
                </a>
            </footer>
        </div>

    );
}

export default Show;
