import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <FooterContent>
          <div>
            <FooterContentHeader>Company</FooterContentHeader>
          </div>
          <div>
            <FooterContentText>Just a fake company</FooterContentText>
          </div>
        </FooterContent>
      </FooterWrapper>
      <FooterWrapper>
        <FooterContent>
          <div>
            <FooterContentHeader>Contacts</FooterContentHeader>
          </div>
          <div>
            <FooterContentText>
              <FooterContentLink href="#">Linkedin</FooterContentLink>
            </FooterContentText>
            <FooterContentText>
              <FooterContentLink href="#">Github</FooterContentLink>
            </FooterContentText>
            <FooterContentText>
              <FooterContentLink href="#">Email</FooterContentLink>
            </FooterContentText>
          </div>
        </FooterContent>
      </FooterWrapper>
      <FooterWrapper>
        <FooterContent>
          <div>
            <FooterContentHeader>Newsletter</FooterContentHeader>
          </div>
          <div>
            <FooterContentText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </FooterContentText>
          </div>
        </FooterContent>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.footer`
  background-color: BlueViolet;
  display: flex;
  justify-content: space-evenly;
  alignitems: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  max-width: 20%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;

const FooterContentHeader = styled.h4`
  color: white;
`;

const FooterContentLink = styled.a`
  color: white;
  text-decoration: none;
`;

const FooterContentText = styled.p`
  color: white;
`;
