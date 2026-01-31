const About = () => {
  return (
    <section id="about" className="py-12 bg-secondary/30">
      <div className="container max-w-3xl mx-auto px-6">
        <h2 className="section-title">About</h2>

        <div className="space-y-4 font-serif text-foreground/90 leading-relaxed">
          <p>
            I am <strong className="font-semibold text-foreground">Towfik Ahmed Razin</strong>, 
            a Class 12 student at <strong className="font-semibold text-foreground">BAF Shaheen College</strong>, 
            Dhaka, Bangladesh. I am deeply passionate about technology and innovation.
          </p>

          <p>
            I specialize in <strong className="font-semibold text-foreground">JavaScript, Python, and Firebase</strong>, 
            and have hands-on experience with 2D physics engines. I enjoy building projects that 
            combine technical execution with creative problem-solving.
          </p>

          <div className="py-4">
            <h3 className="font-mono text-lg font-medium text-foreground mb-3">Education</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong className="font-semibold">SSC</strong> — United Islamia Govt. High School, Madaripur 
                <span className="text-muted-foreground"> (2018–2024)</span>
              </p>
              <p>
                <strong className="font-semibold">HSC</strong> — BAF Shaheen College, Dhaka 
                <span className="text-muted-foreground"> (2025–2026)</span>
              </p>
            </div>
          </div>

          <p>
            Outside of coding, I am fascinated by <strong className="font-semibold text-foreground">
            science, astronomy, and sci-fi literature</strong> — interests that often inspire 
            and shape my technical projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
