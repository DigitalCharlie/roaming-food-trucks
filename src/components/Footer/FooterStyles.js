import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 50px 10px;
  background: var(--orange);
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 100%) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-top: 30px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 120px;
   
  @media (max-width: 100%) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
display: flex; 
gap: 0 10px; 
  color: var(--white);
  margin-bottom: 10px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: #000000;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: var(--black);
  margin-bottom: 10px;
  font-weight: bold;
`;