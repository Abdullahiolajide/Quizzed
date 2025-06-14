// const endpoint = "http://localhost:2000/"
const endpoint = "https://quizzed-rvo8.onrender.com"
    async function getData (){
        try{
        const response = await fetch(endpoint)

        if(!response.ok){
            throw new Error('Error Occured')
        }
            const data = await response.json();
            return data 
        }catch(error){
            console.log(error);
        }finally{
            console.log('fully logged ')
        }
    }
export { getData }
