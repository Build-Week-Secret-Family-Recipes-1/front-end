import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../Actions';
import styled from 'styled-components';

const InputDiv = styled.div`
position: absolute; left:50px; top:25px;
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



function Searchbar(props) {

        return (
            <div>
                <form onSubmit={props.handleSubmit}>
                <InputDiv>
                    <Input className='searchBarInput'
                    className="search-box"
                    type="text"
                    name="search"
                    value={props.searchTerm}
                    onChange={props.handleChange}
                    placeholder="Search for Recipes..."
                    />
                </InputDiv >
                </form>
            </div>
        )

};

export default Searchbar