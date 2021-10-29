import 'react-native';
import React from 'react';
import Character from '../components/Character';
import renderer from 'react-test-renderer';

test('Character snapshot', () => {
    const snap = renderer.create(
        <Character/>
    ).toJSON();
    expect(snap).toMatchSnapshot();
}) 