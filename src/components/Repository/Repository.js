import styled from "styled-components";

// Icons
import { star, fork } from "../../assets";

// Styled Components
const Card = styled.div`
  margin: 0px 15px 30px;
  width: calc(50% - 30px);
  background: #fff;
  box-shadow: -1px 4px 20px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    width: 100%;
    margin: 0 30px;
  }
`;

const CardBody = styled.div`
  padding: 30px 30px 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.6rem;
  margin-bottom: 15px;
`;

const Button = styled.a`
  font-size: 14px;
  color: #fff;
  line-height: 1;
  padding: 10px;
  text-align: center;
  background: #212121;
  display: block;
  margin-top: auto;

  &:hover {
    background: #000;
  }
`;

const Tags = styled.div`
  margin-bottom: 15px;
  display: flex;
`;
const Tag = styled.span`
  font-size: 14px;
  /* font-weight: 300; */
  display: inline-block;
  margin-right: 5px;
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Icon = styled.img`
  width: 15px;
  margin-right: 5px;
`;

function Repository({ repo }) {
  const { name, description, forks_count, stargazers_count, html_url } = repo;
  return (
    <Card>
      <CardBody>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Tags>
          <Tag>
            <Icon src={star} />
            {stargazers_count}
          </Tag>
          <Tag>
            <Icon src={fork} />
            {forks_count}
          </Tag>
        </Tags>
      </CardBody>
      <Button href={html_url} target="_blank">
        Go to repository
      </Button>
    </Card>
  );
}

export default Repository;
