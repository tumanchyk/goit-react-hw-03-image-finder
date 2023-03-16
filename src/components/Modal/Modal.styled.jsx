import styled from "@emotion/styled";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
    `
  
  
  const ModalEl = styled.div`
   max-width: calc(100vw - 480px);
  max-height: calc(100vh - 100px);
  overflow: hidden;
   `

  const ModalImg = styled.img`
  display: block;
  width: 100%;
  height: auto;`
  export {Overlay, ModalEl, ModalImg}