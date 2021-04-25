import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => {
    const {data} = props;
    const onclickdata = () => {
        console.log(data)
    }
    return(
        <>
        <h1>居酒屋</h1>
        <SList>
            <SPicture>

            </SPicture>
            <SContent>
                <STitle></STitle>
                <SAccess></SAccess>
            </SContent>
        </SList>
        </>
    )
}

export default ListItem;

const SList = styled.div`

`;

const SPicture = styled.div`

`;

const SContent = styled.div`

`;

const STitle = styled.div`

`;

const SAccess = styled.div`

`;