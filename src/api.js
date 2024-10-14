const API_URL = "http://localhost:3000/Books";

//fetch all book details
export const getBooks = async () =>{
   const response = await fetch(API_URL);
   return await response.json();   
}

//delete books
export const deleteBooks = async (id) => {
   return await fetch(`${API_URL}/${id}`,{ method: 'DELETE' })
}

//add books
export const addBooks = async (item) => {
   const response = await fetch(API_URL,{
      method: 'POST',
      headers: {
         'Content-Type' : 'application/json', 
      },
      body: JSON.stringify(item),
   })
 return await response.json()
}

//fetch a single book by ID
export const getBooksById = async (id) =>{
   const response = await fetch(`${API_URL}/${id}`)
   return await response.json()
}

//update a book
export const updateBooks = async (id,book) =>{
   const response = await fetch(`${API_URL}/${id}`,{
      method: 'PUT',
      headers: {
         'Content-Type' : 'application/json', 
      },
      body: JSON.stringify(book)
   })
   return await response.json()
}