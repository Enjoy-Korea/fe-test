import React, { useState } from 'react';
import data from '../data/houses.mock.json';
import Button from '../components/common/Button';
import ListItem from '../components/ListItem';
import Layout from '../components/common/Layout';

const MainList = () => {
  const [sortingType, setSortingType] = useState('university');

  const onClickSortingType = (e) => {
    const value = e.target.getAttribute('name');
    setSortingType(value);
  };

  return (
    <Layout>
      <section>
        <Button
          name="university"
          isActive={sortingType === 'university'}
          onClick={onClickSortingType}
        >
          university
        </Button>
        <Button
          name="houseType"
          isActive={sortingType === 'houseType'}
          onClick={onClickSortingType}
        >
          houseType
        </Button>
        <ul>
          {data
            .sort((a, b) => a.id - b.id)
            .map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
        </ul>
      </section>
    </Layout>
  );
};

export default MainList;
