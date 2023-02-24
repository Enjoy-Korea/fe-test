import React, { useEffect, useState } from 'react';
import data from '../data/houses.mock.json';
import ListItem from '../components/ListItem';
import Layout from '../components/common/Layout';
import SelectBox from '../components/common/SelectBox';
import styled from 'styled-components';

const Ul = styled.ul`
  margin-top: 1rem;
`;

const MainList = () => {
  const [sortingType, setSortingType] = useState('none');
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    let newData = [...data];

    newData.sort((a, b) => {
      return a.id - b.id;
    });

    if (sortingType === 'university') {
      newData.sort((a, b) => {
        if (a.university < b.university) return -1;
        else if (a.university === b.university) return 0;
        else return 1;
      });
    } else if (sortingType === 'houseType') {
      newData.sort((a, b) => {
        if (a.houseType < b.houseType) return -1;
        else if (a.houseType === b.houseType) return 0;
        else return 1;
      });
    }

    setSortedData(newData);
  }, [sortingType]);

  const onChangeSortingType = (e) => {
    const value = e.target.value;
    setSortingType(value);
  };

  return (
    <Layout>
      <section>
        <SelectBox
          name="sortingType"
          defaultValue={sortingType}
          onChange={onChangeSortingType}
        >
          <option value="none">정렬기준</option>
          <option value="university">university</option>
          <option value="houseType">houseType</option>
        </SelectBox>
        <Ul>
          {sortedData.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </Ul>
      </section>
    </Layout>
  );
};

export default MainList;
