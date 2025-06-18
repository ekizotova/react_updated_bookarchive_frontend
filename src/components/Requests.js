const AUTHORS_URL = 'http://localhost:8080/api/authors';
const BOOKS_URL = 'http://localhost:8080/api/books';
const BOOKSTORES_URL = 'http://localhost:8080/api/bookstores';
const PUBLISHERS_URL = 'http://localhost:8080/api/publishers';
const AUTHOR_URL = 'http://localhost:8080/api/authors';
const AUTHOR_CHECK = 'http://localhost:8080/api/authors/checkAuthorExists';
const PUBLISHER_CHECK = 'http://localhost:8080/api/publishers/check';
const BOOKSTORE_CHECK = 'http://localhost:8080/api/bookstores/check';

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
        return []; 
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
        return []; 
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
        return [];
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
        return []; 
    }
}

export async function GetAuthorById(id) {
    try {
        const response = await fetch(AUTHOR_URL + "/name/" + id); 
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log("author: ", data);
        return data; 
    } catch (error) {
        console.error("Error fetching: ", error);
        return [];
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
    return result.exists; 
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
    throw error;
  }
}

export const GetPublishedByForBook = async (publisherId) => {
  try {
    const res = await fetch(`http://localhost:8080/api/publishers/publisher_info/${publisherId}`);
    if (!res.ok) {
      throw new Error('Failed to fetch publisher');
    }
    return await res.json();
  } catch (err) {
    throw new Error(`Error in GetPublisherDetails: ${err.message}`);
  }
};


export const GetStockForBook = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/inStock/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch publishedBy for book ${id}`);
    }

    const inStock = await response.json();
    return inStock;
  } catch (error) {
    throw new Error(`Error in GetPublishedByForBook: ${error.message}`);
  }
}

export const BookByStoreAndPubl = async (publName, storeName) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/byBookstorePublisher?publName=${encodeURIComponent(publName)}&storeName=${encodeURIComponent(storeName)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(`Error fetching books: ${error.message}`);
  }
}

export const GetAuthorsBooks = async (idAuthor) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/author/${idAuthor}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch books by ${idAuthor}`);
    }

    const written = await response.json();
    return written;
  } catch (error) {
    throw new Error(`Error in GetAuthorsBooks: ${error.message}`);
  }
}

export const CheckPublisherExists = async (publName) => {
  try {
    const response = await fetch(PUBLISHER_CHECK, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({publName}),
    });

    if (!response.ok) {
      throw new Error(`Failed to check publisher existence. Server returned ${response.status}`);
    }

    const result = await response.json();
    return result.exists;
  } catch (error) {
    console.error('Error checking publisher existence:', error);
    throw error;
  }
}

export const CheckBookstoreExists = async (storeName) => {
  try {
    const response = await fetch(BOOKSTORE_CHECK, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({storeName}),
    });

    if (!response.ok) {
      throw new Error(`Failed to check bookstore existence. Server returned ${response.status}`);
    }

    const result = await response.json();
    return result.exists; 
  } catch (error) {
    console.error('Error checking bookstore existence:', error);
    throw error;
  }
};

