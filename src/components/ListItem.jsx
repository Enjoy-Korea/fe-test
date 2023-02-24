import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/constants/color';

const ListBox = styled.div`
  padding: 1.2rem;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  margin-bottom: 1rem;

  .university {
    font-size: 16px;
    color: ${colors.black};
    margin-bottom: 1rem;
  }

  .houseName {
    font-size: 30px;
    color: ${colors.black};
  }

  .houseType {
    font-size: 18px;
    color: ${colors.darkGray};
  }
`;

const Content = styled.div`
  .desc {
    font-size: 16px;
    color: ${colors.darkGray};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
  }
`;

const ListItem = ({ item }) => {
  const navigate = useNavigate();
  const onMoveDetailPage = (e) => {
    const id = e.target.closest('li').getAttribute('itemID');
    navigate(`/detail/${id}`);
  };

  return (
    <li itemID={item.id} onClick={onMoveDetailPage}>
      <ListBox>
        <Title>
          <p className="university">{item.university}</p>
          <p className="houseType">{item.houseType}</p>
          <h1 className="houseName">{item.name}</h1>
          <p className="address">{item.address}</p>
        </Title>
        <Content>
          <p className="desc">{item.description}</p>
        </Content>
      </ListBox>
    </li>
  );
};

export default ListItem;
