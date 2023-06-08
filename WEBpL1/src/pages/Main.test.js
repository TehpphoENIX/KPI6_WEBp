import { getByTestId, render, screen } from '@testing-library/react';
import MainPage from './Main';
import React from 'react';

jest.mock('react-router-dom',() => ({
    useNavigate: () => ((link) => console.log('went to '+link))
}))

jest.mock('../components/Header',() => () => <div data-testid="header"/>)
jest.mock('../components/Footer',() => () => <div data-testid="footer"/>)
jest.mock('../components/Post',() => ({post}) => (<div data-testid={`post-${post.id}`}>
  <p data-testid='post.header'>{post.header}</p>
  <p data-testid='post.author'>{post.author}</p>
  <p data-testid='post.date'>{post.date}</p>
  <p data-testid='post.imageSrc'>{post.imageSrc}</p>
  <p data-testid='post.imageAlt'>{post.imageAlt}</p>
  <p data-testid='post.text'>{post.text}</p>
</div>))
  
const postTestArray = [
  {
    id:0,
    header:'H1',
    author:'A1',
    date:'D1',
    imageSrc:'I1',
    imageAlt:'Al1',
    text:'T1'
  },
  {
    id:1,
    header:'H2',
    author:'A2',
    date:'D2',
    imageSrc:'I2',
    imageAlt:'Al2',
    text:'T2'
  }
]

test('correct output test', () => {
  render(<MainPage postArray={postTestArray}/>)

  postTestArray.forEach(element => {
    let DOMelement = screen.getByTestId(`post-${element.id}`)
    expect(DOMelement).toBeTruthy()
    expect(DOMelement.querySelector("[data-testid='post.header']")).toHaveTextContent(element.header)
    expect(DOMelement.querySelector("[data-testid='post.author']")).toHaveTextContent(element.author)
    expect(DOMelement.querySelector("[data-testid='post.date']")).toHaveTextContent(element.date)
    expect(DOMelement.querySelector("[data-testid='post.imageSrc']")).toHaveTextContent(element.imageSrc)
    expect(DOMelement.querySelector("[data-testid='post.imageAlt']")).toHaveTextContent(element.imageAlt)
    expect(DOMelement.querySelector("[data-testid='post.text']")).toHaveTextContent(element.text)
  })
})