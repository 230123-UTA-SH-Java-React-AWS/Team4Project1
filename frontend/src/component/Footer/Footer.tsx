import navBackgroundImg from '../../resources/images/vector-jan-2021-19_generated.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' style={{backgroundImage: `url(${navBackgroundImg})`}}>
            <a href="https://www.vecteezy.com/free-vector/black-background">Black Background Vectors by Vecteezy</a>
            <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
        </footer>
    );
}

export default Footer;