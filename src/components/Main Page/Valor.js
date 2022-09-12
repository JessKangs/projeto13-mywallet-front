import styled from "styled-components";

export default function Valor ({info}) {

    return (
        <Content type={info.type}><h1>{info.value}</h1></Content>
    )
}

const Content = styled.div`

    h1 {
        color: ${(props) => props.type === 'entrada' ? '#03AC00' : '#C70000'};
    }
`