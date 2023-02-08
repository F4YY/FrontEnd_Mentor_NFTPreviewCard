import React from 'react';
import { Container } from './styled/Container.styled';
import {
  StyledNFTcard,
  NFTcardimagesection,
  NFTcardimage,
  NFTcardoverlay,
  NFTcardinfo,
  NFTcardcounttime,
  NFTcardcount,
  NFTcardtime,
  NFTcardfooter,
  NFTfooterimage
} from './styled/NFTcard.styled';
import clock from './images/icon-clock.svg';
import ethereum from './images/icon-ethereum.svg';
import equilibrium from './images/image-equilibrium.jpg';
import eye from './images/icon-view.svg';
import avatar from './images/image-avatar.png';

export const NFTpreviewcard = () => {
  return (
    <Container>
        <StyledNFTcard>
            <NFTcardimagesection>
              <NFTcardimage src={equilibrium} alt='equilibrium' />
              <NFTcardoverlay>
                <img src={eye} alt='eye' />
              </NFTcardoverlay>
            </NFTcardimagesection>
            <NFTcardinfo>
              <h3>Equilibrium #3429</h3>
              <p>Our Equilibrium collection promotes balance and calm.</p>
              <NFTcardcounttime>
                <NFTcardcount>
                  <img src={ethereum} alt='ethereum'/>
                  <h4>
                    0.041 ETH
                  </h4>
                </NFTcardcount>
                <NFTcardtime>
                  <img src={clock} alt='clock'/>
                  <h5>
                    3 days left
                  </h5>
                </NFTcardtime>
              </NFTcardcounttime>
            </NFTcardinfo>
            <NFTcardfooter>
              <NFTfooterimage src={avatar} alt='jules' />
              <p>
                Creation of<span>&nbsp;Jules Wyvern</span>
              </p>
            </NFTcardfooter>
        </StyledNFTcard>
    </Container>
  )
}
