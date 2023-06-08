import { getByTestId, render, screen } from '@testing-library/react';
import Create from './Create';
import React from 'react';

jest.mock('../components/Header',() => () => <div data-testid="header"/>)
jest.mock('../components/Footer',() => () => <div data-testid="footer"/>)

const testPost = {
    id:0,
    header:'H1',
    author:'A1',
    date:'D1',
    imageSrc:'I1',
    imageAlt:'Al1',
    text:'<p>T1</p>'
}

function testCreationCallback() {
    
}

test('post creation test',()=>{
    render(<Create creationCallback={testCreationCallback}/>)

})