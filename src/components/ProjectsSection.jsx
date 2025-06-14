import { ArrowRight, Dice1, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Monocular Depth Estimation",
        description: "Using a U-Net with a MobileNetV2 backbone architecture to perform monocular depth estimation on the NYU Depth V2 dataset.",
        image: "/projects/depth_estimation.png",
        tags: ["PyTorch", "OpenCV", "Transfer Learning", "U-Net", "MobileNetV2"],
        githubURL: "https://github.com/RyanV27/depth-estim-mobilenet"
    },
    {
        id: 2,
        title: "RAG Pipeline for FMEA",
        description: "A Retrieval-Augmented Generation (RAG) pipeline created using LangChain, Gemini API, and sentence transformers from Hugging Face to create FMEA documents for SMT Manufacturing.",
        image: "/projects/rag_fmea.png",
        tags: ["LangChain", "LangGraph", "Gemini API", "Hugging Face Embeddings", "RAG"],
        githubURL: "https://github.com/RyanV27/rag-smt-fmea"
    },
    {
        id: 3,
        title: "Object Pose Estimation",
        description: "Template matching method to find the pose of an object through the aggregation of features from Stable Diffusion with Vision Transformers integrated for improved performance.",
        image: "/projects/diffusion_object_pose.png",
        tags: ["Stable Diffusion", "Vision Transformer", "PyTorch", "Matplotlib"],
        githubURL: "https://github.com/RyanV27/diffusion-object-pose"
    },
    {
        id: 4,
        title: "Data Preprocessing on World Bank Datasets",
        description: "An ETL pipeline built with PySpark and Pandas to preprocess World Bank datasets on projects, population, and GDP. Essential data transformations, including handling missing values, setting data types, removing duplicates, and identifying outliers are performed.",
        image: "/projects/world_bank_data.png",
        tags: ["PySpark", "Databricks", "Pandas"],
        githubURL: "https://github.com/RyanV27/world-bank-data-preprocessing"
    },
    {
        id: 5,
        title: "ETL Workflow on Retail Transactions Data",
        description: "A simple ETL pipeline to analyze retail transactions and customer data using PySpark on Databricks. The code for extractor, transformer and loader were written using the factory method pattern.",
        image: "/projects/retail_etl_pipeline.png",
        tags: ["PySpark", "Databricks"],
        githubURL: "https://github.com/RyanV27/retail-etl-pipeline"
    },
    {
        id: 6,
        title: "Music Streaming Application",
        description: "A simple application to play songs stored in S3, with song, artist and album details stored in CockroachDB and user-specific listening history and playlists stored in Cassandra.",
        image: "/projects/music_streaming_app.png",
        tags: ["Apache Cassandra", "Apache Kafka", "CockroachDB", "Django", "AWS", "Docker"],
        githubURL: "https://github.com/RyanV27/music-streaming-app"
    },
    {
        id: 7,
        title: "Federated Learning for Improved Heart Attack Detection",
        description: "Exploring the use of federated learning algorithms, including FedAvg, FedProx and SCAFFOLD, to improve the accuracy of a CNN created for heart attack detection.",
        image: "/projects/federated_learning.png",
        tags: ["PyTorch", "CNN"],
        githubURL: "https://github.com/RyanV27/federated-learning-for-heart-attack-detection"
    },
    {
        id: 8,
        title: "Person Re-identification",
        description: "Identifying the images in a database that are similar to a reference image.",
        image: "/projects/person_re_identification.png",
        tags: ["PyTorch", "Siamese Network"],
        githubURL: "https://github.com/RyanV27/person-re-identification"
    }
]

export const ProjectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs"
                        >
                            <div className="h-60 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                        {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                            href={project.githubURL}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/RyanV27"
                        target="_blank"
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    >
                        Check my GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}