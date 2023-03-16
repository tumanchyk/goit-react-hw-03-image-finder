import { Component } from "react"
import {Searchbar} from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { getImgsApi } from "./API";
import { LoadButton } from "./BtnLoad/Button";
import { Modal } from "./Modal/Modal";
import { ModalImg } from "./Modal/Modal.styled";
import { Loader } from "./Loader/Loader";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const imgApi = new getImgsApi()

export class App extends Component {
  state ={
    imgSet: [],
    selectedImg: {},
    showButton: false,
    isLoading: false,
    showModal: false,
    error: false,
  }
  onSearchForm = async ({value}) =>{
    if(!value.length)  return;
    imgApi.resetPage()
    imgApi.query = value.trim();
    try{
      this.setState({isLoading: true})
      const result = await imgApi.fetchImgItem()
      this.setState({imgSet: result}) 
      if(result.length >= 12){
        this.setState({showButton: true})
      }
    } catch(error){
      this.setState({ error: true });
    } finally{
      this.setState({isLoading: false})
    }
  }
  
  handleLoadMoreBtn = async()=>{
    imgApi.incrementPage()
    try{
      this.setState({isLoading: true})
      this.setState({error: true})
      const result = await imgApi.fetchImgItem()
      this.setState(({imgSet}) =>({imgSet: [...imgSet, ...result]}))

      if(result.length < 12){
        this.setState({showButton: false})
      }

    } catch(error){
      this.setState({error: true})

    } finally{
      this.setState({isLoading: false})
    }
    
  }
  onImgClick = (id) =>{
      this.setState(({imgSet, showModal}) => ({
      selectedImg: imgSet.filter(img => img.id === id),
      showModal : !showModal
    }))
  }
toggleModal = ()=>{
  this.setState(({showModal}) => ({
    showModal: !showModal
  }))
}

  render(){
    const {imgSet, selectedImg, showButton, isLoading, showModal, error} = this.state;
  return (
    <>
      <Searchbar onSubmit= {this.onSearchForm}/>
      {error && Notify.failure('Nothing was found for your request')}
      <ImageGallery items= {imgSet} onImgClick = {this.onImgClick}></ImageGallery>
      {showButton &&<LoadButton onClick={this.handleLoadMoreBtn}></LoadButton>}
      {isLoading && <Loader></Loader>}
      {showModal && <Modal onClose={this.toggleModal}><ModalImg src={selectedImg[0].largeImageURL} alt ={selectedImg[0].tags}></ModalImg></Modal>}
    </>
  );
    }
};
