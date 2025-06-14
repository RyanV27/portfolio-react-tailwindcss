import { BrainCircuit, MessageSquareCode, Workflow, Box } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center">
        {/* About me heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-primary">Me</span>
        </h2>

        <h3 className="text-2xl font-semibold mb-4">
          Aspiring Data Engineer & Machine Learning Enthusiast
        </h3>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          I’m a curious and driven student passionate about exploring new technologies. 
          I love experimenting with emerging tools and applying my knowledge to solve real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#contact" className="cosmic-button">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/drive/folders/1sV7QbuRFhyJYdNiO_ENITDJgF-WmI2o9?usp=sharing"
            target="_blank"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            Download CV
          </a>
        </div>

        {/* 2x2 Grid of Skill Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skill Card 1 */}
          <div className="gradient-border p-6 card-hover text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BrainCircuit className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Machine Learning & Deep Learning
                </h4>
                <p className="text-muted-foreground">
                  Built and refined ML models in PyTorch, with hands-on experience in architectures such as Vision Transformers, Stable Diffusion, and U-Net.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Card 2 */}
          <div className="gradient-border p-6 card-hover text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MessageSquareCode className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Natural Language Processing & Large Language Models
                </h4>
                <p className="text-muted-foreground">
                  Built advanced NLP pipelines with LLMs, leveraging RAG architecture, prompt engineering, and efficient embedding-based retrieval.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Card 3 */}
          <div className="gradient-border p-6 card-hover text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Data Engineering & Scalable Data Systems
                </h4>
                <p className="text-muted-foreground">
                  Designed robust data pipelines and managed scalable database systems using PySpark, Databricks, PostgreSQL, and distributed NoSQL solutions like Cassandra and CockroachDB.
                </p>
              </div>
            </div>
          </div>

          {/* Skill Card 4 */}
          <div className="gradient-border p-6 card-hover text-left">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Box className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Tools & Platforms</h4>
                <p className="text-muted-foreground">
                  Skilled in using modern development, containerization, and cloud tools such as Docker, Git, Databricks, and AWS, for efficient deployment and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};