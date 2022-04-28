import { useEffect, useRef, useState } from "react";


export const useFetchRef = (url) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({data:null, loading:true, error:null});

  useEffect(() => {
  
    return () => {
      isMounted.current = false;
    };
  }, []);
  

  useEffect(() => {

    setState({data:null, loading:true, error:null});
    
    fetch(url)
      .then(resp => resp.json())
      .then(data => {

        setTimeout(() => {
          setState({
            loading:false,
            error:null,
            data
          })
        }, 4000);
      })

  }, [url])

  return state;

};
