import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router-dom';

const PageNotFound = () => {
    return (<>
        <Header/>
        <p>PageNotFound</p>
        <div class='dummy'></div>
        <Footer/>
    </>);
};

export default PageNotFound