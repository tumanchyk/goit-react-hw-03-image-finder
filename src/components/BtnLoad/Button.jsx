import PropTypes from 'prop-types';
import { Button } from "./Button.style";

export function LoadButton ({onClick}){
    return (
        <Button type="button" onClick={onClick}>Load more</Button>
    )
}
LoadButton.propTypes ={
    onClick: PropTypes.func.isRequired,
}