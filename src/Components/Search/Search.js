import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import style from './style'
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
    const { handleChange, classes } = props;
    const debounceSearch = (event) => handleChange(event)

    return (<TextField
        label="Search By Name"
        onChange={debounce(debounceSearch, 500)}
        fullWidth
        className={classes.sticky}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <Search />
                </InputAdornment>
            ),
        }}
    />)
}

SearchInput.propTypes = {
    handleChange: PropTypes.func
};

export default withStyles(style)(SearchInput)