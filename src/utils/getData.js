const API = "https://rickandmortyapi.com/api/character/"

const getData = async (pageOrId) => {
   console.log(pageOrId)
   const apiUrl = pageOrId ? `${API}${pageOrId}` : API
   console.log(apiUrl)
   try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data
   }
   catch{
      console.log(`Fetch Error ${error}`)
   }
}

export default getData