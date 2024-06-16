import styled from 'styled-components';
import PropTypes from 'prop-types';


export const Card = ({ borderColor, gridArea, img, title, text }) => {
  const Cards = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 2rem;
    grid-area: ${gridArea};
    border-top: 3px solid ${borderColor};
    border-radius: 4px;
    box-shadow: 5px 5px 15px hsl(233, 11%, 83%);
  `;

  const H4 = styled.h4`
    margin-top: 0;
    margin-bottom: 0;
    justify-self: start;
    text-align: left;
    font-size: 1.35rem;
    font-weight: 600;
    color: hsl(234, 12%, 34%);
  `;

  const P = styled.p`
    display: inline-block;
    margin-top: 1.2rem;
    text-align: left;
    font-size: .85rem;
    font-weight: 300;
    color: hsl(229, 6%, 66%);
    line-height: 1.75;
  `;

  const Img = styled.img`
    margin-top: 1.2rem;
    justify-self: end;
    max-width: 65px;
    align-self: flex-end;
  `;

  return (
    <Cards>
      <H4>{title}</H4>
      <P>{text}</P>
      <Img src={img} alt={title}/>
    </Cards>
  );
};

Card.propTypes = {
  borderColor: PropTypes.string.isRequired,
  gridArea: PropTypes.string.isRequired,
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
