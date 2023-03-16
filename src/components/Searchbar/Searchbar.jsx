import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchSection, SearchForm, SearchFormButton, SearchFormInput, SearchIcon} from './Searchbar.styled';

export const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, actions) => {
        onSubmit({
            ...values,
          });
   actions.resetForm();
}
    
        return(
            <SearchSection>
                <Formik 
            initialValues={{value: ''}}
            onSubmit={handleSubmit}>
             <SearchForm>
               <SearchFormButton type="submit">
                <SearchIcon></SearchIcon>
              </SearchFormButton>
           
              <SearchFormInput  
                 type="text"
                 name="value"
                 autoComplete="off"
                 autoFocus
                 placeholder="Search images and photos"></SearchFormInput>
             </SearchForm>
             </Formik>
           </SearchSection>
           
                   )
    }  
Searchbar.propTypes = {
onSubmit: PropTypes.func.isRequired,
}