import styled from "styled-components";

export const Container = styled.div`
    --Soft-blue: hsl(215, 51%, 70%);
    --Cyan: hsl(178, 100%, 50%);
    --Image-hover: hsl(178, 100%, 50%, 0.5);
    --Very-dark-blue-main-BG: hsl(217, 54%, 11%);
    --Very-dark-blue-card-BG: hsl(216, 50%, 16%);
    --Very-dark-blue-line: hsl(215, 32%, 27%);
    --White: hsl(0, 0%, 100%);
    font-size: 16px;
    font-family: 'Outfit';
    display:flex;
    min-height:100vh;
    width:100wh;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    background-color:var(--Very-dark-blue-main-BG);
        h3{
            color:var(--White);
            font-weight: 600;
            &:hover{
                cursor: pointer;
                color:var(--Cyan)
            }
        }

        h4{
            font-size:14px;
            color:var(--Cyan);
        }

        h5{
            font-size:12px;
            font-weight:400;
            color:var(--Soft-blue);
        }

        p{
            font-size:14px;
            color:var(--Soft-blue);
            letter-spacing:.05rem;
        }

        span{
            color:var(--White);
            font-weight:600;
            &:hover{
                cursor: pointer;
                color:var(--Cyan)
            }
        }
`