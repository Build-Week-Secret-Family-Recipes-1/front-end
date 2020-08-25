import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../Actions';
import styled from 'styled-components';

const InputDiv = styled.div`
position: absolute; left:50px; top:15px;
width: 350px;
display: flex; 
justify-content: center;
align-items: center;
margin: 20px auto;
`;
const Input = styled.input`
width: 350px;
height: 40px;
border: none;
font-size: 15px;
outline: none;
padding: 0 15px;
border: 2px solid black;
@media (max-width: 500px) {
text-align: center;
width: 300px;
}
`;



class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <InputDiv>
                    <Input className='searchBarInput'
                        placeholder="Search for Recipes..."
                    />
                </InputDiv >
            </div>
        )
    }

};

export default SearchBar;