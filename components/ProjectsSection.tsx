export default function ProjectsSection() {
    const projects = [
      {
        title: "Fraud Detection AI",
        description: "Built an AI-driven fraud detection model using Python and Scikit-learn.",
        tools: ["Python", "Scikit-learn", "Pandas"],
      },
      {
        title: "Water Quality Prediction",
        description: "Predictive model to assess water quality using TensorFlow.",
        tools: ["Python", "TensorFlow", "NumPy"],
      },
      {
        title: "Loan Protection AI",
        description: "Machine learning system to evaluate loan repayment risks.",
        tools: ["Python", "XGBoost", "SQL"],
      },
      {
        title: "Digital Wallet System",
        description: "Digital wallet system with C++ and SFML.",
        tools: ["C++", "SFML", "Data Structures"],
      },
    ];
  
    return (
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg border p-6 shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span key={i} className="rounded bg-blue-100 px-2 py-1 text-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }