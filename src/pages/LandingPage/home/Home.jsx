import Container from "../../../components/container/Container";
import HeroSection from "../home/heroSection/HeroSection";
import Services from "../home/services/Services";

function Home() {
    return (
        <Container className="container">
            <HeroSection />
            <Services />
        </Container>
    );
}

export default Home;