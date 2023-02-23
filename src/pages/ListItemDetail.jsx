import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/constants/color';
import data from '../data/houses.mock.json';
import Layout from '../components/common/Layout';

const DetailBox = styled.div`
  padding: 2rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  .university {
    font-size: 18px;
    color: ${colors.black};
    margin-bottom: 1rem;

    &:after {
      content: '';
      display: block;
      width: 30px;
      height: 4px;
      background-color: ${colors.dark};
      margin: 10px auto;
    }
  }

  .houseName {
    font-size: 30px;
    color: ${colors.black};
  }

  .houseType {
    font-size: 24px;
    color: ${colors.darkGray};
  }
`;

const Content = styled.div`
  .desc {
    font-size: 16px;
    color: ${colors.dark};
    margin-bottom: 1rem;
    text-align: center;
  }

  .university {
    color: ${colors.black};
    font-weight: 700;
  }
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  img {
    display: block;
    max-width: 600px;
  }
`;

const ListItemDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState();

  useEffect(() => {
    const item = data.find((el) => el.id == id);
    setItem(item);
  }, [id]);

  if (!item) return null;

  return (
    <Layout>
      <DetailBox>
        <Title>
          <p className="university">{item.university}</p>
          <p className="houseType">{item.houseType}</p>
          <h1 className="houseName">{item.name}</h1>
          <p className="address">{item.address}</p>
        </Title>
        <ImageBox>
          {item.images.map((img) => (
            <img key={img.key} src={img.url} alt={item.houseType} />
          ))}
        </ImageBox>
        <Content>
          <p className="desc">{item.description}</p>
        </Content>
      </DetailBox>
    </Layout>
  );
};

export default ListItemDetail;
