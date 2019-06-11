import React from 'react';
import { shallow } from 'enzyme';
import Coins from './Coins';
import CoinCard from '../../components/CoinCard';
import CoinsList from '../../components/CoinsList';
import coinsData from '../../data/coinsList.json';

const coinsList = Object.keys(coinsData.Data).slice(0, 10).map(key => coinsData.Data[key]);

test('Coins render correctly', () => {
    // expect(true).toEqual(true);
    const component = shallow(<Coins />);
    expect(component).toMatchSnapshot();
});

test('Search should render correct amount of coins', () => {
    const component = shallow(<Coins />);
    const component2 = shallow(<CoinsList result={coinsList}/>);
    expect(component2.find(CoinCard).length).toEqual(coinsList.length);
});

test('Search should render correct amount of coins based on search term', () => {
    const component = shallow(<Coins />);
    const searchTerm = 'bitcoin';
    component.find('input').simulate('change', { target: { value: searchTerm } });
    const searchRes = component.instance().filterListBySearchTerm(coinsList, searchTerm);
    const searchCount = searchRes.length;
    const component2 = shallow(<CoinsList result={searchRes}/>);
    expect(component2.find(CoinCard).length).toEqual(searchCount);
});
