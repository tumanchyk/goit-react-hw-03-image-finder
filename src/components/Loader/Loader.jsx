import { Dna } from 'react-loader-spinner'
import { LoadContainer } from './Loader.styled'

export function Loader(){
 return(
  <LoadContainer> 
    <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    </LoadContainer>
 )
}