import axios from 'axios';

class API {
  getBooks(){
    return axios.get('http://localhost:8080/api/books')
  }
  saveBook(data){
    return axios.post('http://localhost:8080/api/book', data)
  }
  findById(id){
    return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
  }
}

export default new API();