import styled from "styled-components";

export const StyledNFTcard = styled.article`
    max-width:280px;
    width:100%;
    height:500px;
    border-radius:15px;
    padding:20px;
    color:var(--White);
    background-color:var(--Very-dark-blue-card-BG);
    box-shadow:
        0 30px 25px 5px rgba(0,0,0,0.3)
`
export const NFTcardimagesection = styled.section`
    position: relative;
`
export const NFTcardimage = styled.img`
    display:flex;
    height:60%;
    width:100%;
    border-radius:10px;
`
export const NFTcardoverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease-in-out;
    background:var(--Image-hover);
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`
export const NFTcardinfo = styled.section`
    margin:0 5px;
`
export const NFTcardcounttime = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NFTcardcount = styled(NFTcardcounttime)`
    gap: 5px;
`
export const NFTcardtime = styled(NFTcardcounttime)`
    gap: 3px;
`
export const NFTcardfooter = styled(NFTcardcounttime)`
    margin-top:10px;
    padding-top: 5px;
    justify-content:left;
    border-top-width:.5px;
    border-top-color:var(--Very-dark-blue-line);
    border-top-style: solid;
    gap: 10px;
`
export const NFTfooterimage = styled.img`
    width: 30px;
    border-radius: 50%;
    background-color:var(--White);
    padding:1px;
`