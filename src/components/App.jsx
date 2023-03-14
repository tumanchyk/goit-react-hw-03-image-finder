import { Component } from "react"
import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImgsApi } from "./ImageGallery/API";
import { LoadButton } from "./BtnLoad/Button";
import { Modal } from "./Modal/Modal";
const imgApi = new getImgsApi()

export class App extends Component {
  state ={
    value: '',
    imgSet: [],
    selectedImg: {},
    showButton: false,
    isLoading: false,
  }
  onSearchForm = async ({value}) =>{
    imgApi.resetPage()
    imgApi.query = value;
    this.state.isLoading = true;
    const result = await imgApi.fetchImgItem()
    this.setState({imgSet: result}) 
    this.state.isLoading = false;
    if(result.length >= 12){
      this.state.showButton = true
    }
  }
  
  handleLoadMoreBtn = async()=>{
    imgApi.incrementPage()
    const result = await imgApi.fetchImgItem()
    console.log(result);
    this.setState(({imgSet}) =>({imgSet: [...imgSet, ...result]}))
  }
  onImgClick = (id) =>{
    console.log(id);
    this.setState(prevState => ({
      selectedImg: prevState.imgSet.filter(img => img.id === id)
    }))
  }

  render(){
  return (
    <>
      <Searchbar onSubmit= {this.onSearchForm}/>
      {this.state.isLoading && <div>loading</div>}
      <ImageGallery items= {this.state.imgSet} onImgClick = {this.onImgClick}></ImageGallery>
      {this.state.showButton && <LoadButton onClick={this.handleLoadMoreBtn}></LoadButton>}
      {this.state.selectedImg.length === 1 && <Modal img={this.state.selectedImg}></Modal>}
    </>
  );
    }
};
