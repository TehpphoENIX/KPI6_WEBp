import { render, screen } from '@testing-library/react';
import MainPage from './Main';


jest.mock('react-router-dom',() => ({
    useNavigate: () => ((link) => console.log('went to '+link))
}))
  
test('test1', () => {

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

  render(<MainPage postArray={postTestArray}/>)

  array.forEach(element => {
    console.log(getByText('H2'))
  });
});