export async function deleteData(url){
    const response = await fetch(url, {
        method: 'DELETE'
      })
      return response.status;    
}