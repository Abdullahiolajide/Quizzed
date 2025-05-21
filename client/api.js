<<<<<<< HEAD
// const endpoint = "http://localhost:2000/"
=======
>>>>>>> 1a19348de5f5b7c29cbcccce5754f68891375333
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
