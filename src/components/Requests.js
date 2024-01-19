
const AUTHORS_URL = 'http://localhost:8080/api/authors/all';
const BOOKS_URL = 'http://localhost:8080/api/books/all';
const BOOKSTORES_URL = 'http://localhost:8080/api/bookstores/all';
const PUBLISHERS_URL = 'http://localhost:8080/api/publishers/all';
const AUTHOR_URL = 'http://localhost:8080/api/authors';
const AUTHOR_CHECK = 'http://localhost:8080/api/authors/checkAuthorExists';

export async function GetAllAuthors() {
    try {
        const response = await fetch(AUTHORS_URL);
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
		
		const data = response.json();

        console.log("all authors: ", data);
        return await data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return []; // return empty array in case of error
    }
}

export async function GetAllBooks() {
    try {
        const response = await fetch(BOOKS_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = response.json();
        console.log("all books: ", data);
        return await data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return []; // return empty array in case of error
    }
}

export async function GetAllBookstores() {
    try {
        const response = await fetch(BOOKSTORES_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = response.json();
        console.log("all bookstores: ", data);
        return await data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return []; // return empty array in case of error
    }
}

export async function GetAllPublishers() {
    try {
        const response = await fetch(PUBLISHERS_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = response.json();
        console.log("all publishers: ", data);
        return await data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return []; // return empty array in case of error
    }
}

export async function GetAuthorById(idAuthor) {
    try {
        const response = await fetch(AUTHOR_URL + "/" + idAuthor); // Make sure to use the correct endpoint for product details
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log("product details: ", data);
        return data; // Assuming that the data has the reviews and orders within it
    } catch (error) {
        console.error("Error fetching product details: ", error);
        // Return an object with empty arrays for reviews and orders in case of error
        return { reviews: [], orders: [] };
    }
}

export const CheckAuthorExists = async (authorData) => {
  try {
    const response = await fetch(AUTHOR_CHECK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authorData),
    });

    if (!response.ok) {
      throw new Error(`Failed to check author existence. Server returned ${response.status}`);
    }

    const result = await response.json();
    return result.exists; // Предполагается, что сервер возвращает объект { exists: true/false }
  } catch (error) {
    console.error('Error checking author existence:', error);
    throw error;
  }
}

export const AddAuthor = async (newAuthorData) => {
  try {
    const response = await fetch(AUTHOR_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAuthorData),
    });

    if (!response.ok) {
      throw new Error(`Failed to add author. Server returned ${response.status}`);
    }

    const addedAuthor = await response.json();
    console.log('Author added successfully:', addedAuthor);
  } catch (error) {
    console.error('Error adding author:', error);
    throw error; // Прокидываем ошибку для обработки в компоненте
  }
}



export const GetPublishedByForBook = async (idBook) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/publishedBy/${idBook}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch publishedBy for book ${idBook}`);
    }

    const publishedBy = await response.json();
    return publishedBy;
  } catch (error) {
    throw new Error(`Error in GetPublishedByForBook: ${error.message}`);
  }
}

export const GetStockForBook = async (idBook) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/inStock/${idBook}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch publishedBy for book ${idBook}`);
    }

    const inStock = await response.json();
    return inStock;
  } catch (error) {
    throw new Error(`Error in GetPublishedByForBook: ${error.message}`);
  }
};

