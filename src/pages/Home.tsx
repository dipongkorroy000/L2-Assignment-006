import HeroSection from '@/pages/home/HeroSection';
import Stats from './home/Stats';
import Service from './home/Service';
import Slider from './home/Slider';
const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <Slider></Slider>
            <Service></Service>
            <Stats></Stats>
        </>
    );
};

export default Home;