import { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {

    const[watchlist, setWatchlist] = useState([]);


    const fetchWatchlist = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/watchlist`);
            setWatchlist(response.data)
        } catch (error) {
            console.error("Error on fetching watchlist", error);
        }
    };

    const removeWatchlistMovie = async (id) => {
        try {
          await axios.delete(`http://localhost:8000/watchlist/${id}`);
        
          // Update the watchlist after successful deletion
          setWatchlist((prevWatchlist) =>
            prevWatchlist.filter((movie) => movie.id !== id)
          );
    
        } catch (error) {
          console.error(error);
        }
        fetchWatchlist()
      };

    useEffect(() => {

        fetchWatchlist();

    }, []);

    const contextValues = {
        watchlist,
        fetchWatchlist,
        removeWatchlistMovie
    };

    return (
        <DataContext.Provider value={contextValues}>
            {children}
        </DataContext.Provider>
    )

};

export { DataContext, DataProvider};
