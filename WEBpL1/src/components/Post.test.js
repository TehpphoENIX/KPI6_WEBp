import { render, screen } from '@testing-library/react';
import Post from './Post';


jest.mock('react-router-dom',() => ({
    useNavigate: () => ((link) => console.log('went to '+link))
}))
  
const testPost = {
    id:0,
    header:'H1',
    author:'A1',
    date:'D1',
    imageSrc:'I1',
    imageAlt:'Al1',
    text:'<p>T1</p>'
  }

test('PostRenderTest', () => {

  render(<Post post={testPost}/>)

  expect(screen.getByRole('heading')).toHaveTextContent(testPost.header)
  expect(screen.getByText('by '+testPost.author)).toBeTruthy()
  expect(screen.getByText(testPost.date)).toBeTruthy()
  expect(screen.getAllByAltText(testPost.imageAlt)).toBeTruthy()
  expect(screen.getByTestId("contents-text").innerHTML).toEqual(testPost.text)
});