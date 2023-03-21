import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (url) => {

    // Sets default states 
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {

            // try to get api data and if successful update data
            try {
                setLoaded(true);
                const response = await axios(url);
                setData(response.data)
            } 
            
            // if there is an error update the error state
            catch(error) {
                setError(error);

            // end the request if successful or not
            } finally {
                setLoaded(false);
            }
        }
        fetchData();
    }, [url])

    //return the result of the axios call
  return [data, error, loaded]
}

export default useAxios