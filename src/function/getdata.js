export async function getData(url){
    try{
        const request = await fetch(url, {
            method: 'GET'
        });
        const response = await request.json();
        return response;
    }
    catch(error){
        console.error(error);
    }
}