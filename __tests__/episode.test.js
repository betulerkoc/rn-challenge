import 'react-native';
import React from 'react';
import Episode from '../components/Episode';
import renderer from 'react-test-renderer';

test('Episode snapshot', () => {
    const snap = renderer.create(
        <Episode/>
    ).toJSON();
    expect(snap).toMatchSnapshot();
}) 