import axios from "axios";
const pixabayKey = '33240465-604058830eb729e5ed32ecfda';
const pixabayEndPoint = 'https://pixabay.com/api/'

class getImgsApi {
    constructor(){
        this.query= '';
        this.pageNum = 1;
    }
   async fetchImgItem (){
    const response = await axios.get(`${pixabayEndPoint}?key=${pixabayKey}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.pageNum}&per_page=12`)
    if (response.data.hits.length === 0) {
        return Promise.reject(
          new Error())}

    this.incrementPage();  
    return response.data.hits}

            resetPage(){
                this.pageNum = 1
            }
            incrementPage(){
                this.pageNum += 1
            }

}
export {getImgsApi}
