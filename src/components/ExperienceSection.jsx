const periods = [
    {
        id: 1,
        company: "Qualcomm",
        location: "Hyderabad, India",
        role: "Interim Engineering Intern",
        from: "June 2023",
        to: "July 2023",
        description: [
            "Contributed to Compiler Explorer (https://godbolt.org/), an open-source software, enabling Hexagon-Clang compiler support to provide the Hexagon DSP team with an efficient tool for testing and debugging.",
            "Implemented features for a Node.js application in a Linux environment, utilizing Git/GitHub for version control.",
            "Ensured correct parsing of hexagon assembly instructions.",
            "Identified and took initiative to resolve issues with Opt Pipeline Viewer."
        ],
        tags: ["TypeScript", "Python", "Linux", "Git", "Docker", "Open-source development"]
    },
    {
        id: 2,
        company: "UST",
        location: "Thiruvananthapuram, India",
        role: "Internship Trainee",
        from: "June 2022",
        to: "July 2022",
        description: [
            "Collaborated with a team of interns to develop a GPT-3-enabled chatbot that answered insurance related questions.",
            "Created a responsive web application through Streamlit Python library to present the chatbot.",
            "Extracted data from pdf documents to train and fine-tune the GPT-3 model."
        ],
        tags: ["Python", "GPT-3", "Chatbot"]
    }
]

export const ExperienceSection = () => {
    return(
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Work <span className="text-primary"> Experience</span>
                </h2>

                <div className="grid grid-cols-1 gap-8">
                    {periods.map((period, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs"
                        >
                            <div className="flex items-start space-x-6 relative">
                                {/* Timeline bar */}
                                <div className="flex flex-col items-center p-4 h-94 md:h-70 lg:h-64">
                                    <div className="mb-2 text-sm font-medium">{period.to}</div>
                                    <div className="w-1 bg-primary flex-grow rounded-full"></div>
                                    <div className="mt-2 text-sm font-medium">{period.from}</div>
                                </div>

                                {/* Company Stint Information */}
                                 <div className="p-6 text-left">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h1 className="text-xl font-semibold mb-1"> {period.company} </h1> 
                                        <h3 className="text-md font-semibold mb-1"> {period.location} </h3>
                                        <h6 className="text-sm font-semibold mb-1"> {period.role} </h6>
                                    </div>
                                    <div className="mb-4">
                                        <ul style={{ paddingLeft: '10px' }}>
                                            {period.description.map((point, index) => (
                                                <li 
                                                    key={index} 
                                                    className="text-muted-foreground text-sm"
                                                    style={{ listStyleType: 'circle', paddingLeft: '10px' }}
                                                >
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {period.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground">
                                            {tag}
                                            </span>
                                        ))}
                                    </div>   
                                </div>                       
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}