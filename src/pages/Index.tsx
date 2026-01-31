import Header from "@/components/Header";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-background">
      <Header />
      <main>
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
