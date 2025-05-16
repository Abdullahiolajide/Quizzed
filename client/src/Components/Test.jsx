import React, {useState, useEffect} from 'react';

export default function Test (){
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        const endpoint = "http://localhost:2000/"
        async function getData (){
            try{
           const response = await fetch(endpoint)

           if(!response.ok){
            throw new Error('Error Occured')
           }
                const data = await response.json();
                console.log(data) 
            }catch(error){
                console.log(error);
            }finally{
                console.log('fully logged ')
            }
        }
        getData()
    }, [])

    function reRender(){
        setCount(prev=> prev+1)
    }
    return (
        <div>
            This is test <br />
            {count} <br />
            <button onClick={reRender}>Re Render</button>
        </div>
    )
}