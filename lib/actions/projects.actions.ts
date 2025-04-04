interface Project {
    _id: string;
    title: string;
    description: string;
    tools: string[];
    link: string;
    createdAt: Date;
}

export async function fetchProjects(): Promise<Project[]> {
    try {
        const projects: Project[] = [
            {
                _id: "1",
                title: "Fraud Detection AI",
                description: "Built an AI-driven fraud detection model to identify suspicious transactions in financial datasets using Python and Scikit-learn.",
                tools: ["Python", "Scikit-learn", "Pandas"],
                link: "",
                createdAt: new Date("2023-01-01T00:00:00Z"),
            },
            {
                _id: "2",
                title: "Water Quality Prediction",
                description: "Created a predictive model to assess water quality using deep learning with TensorFlow and NumPy.",
                tools: ["Python", "TensorFlow", "NumPy"],
                link: "",
                createdAt: new Date("2023-06-01T00:00:00Z"),
            },
            {
                _id: "3",
                title: "Loan Protection AI",
                description: "Designed a machine learning system to evaluate loan repayment risks using XGBoost and SQL.",
                tools: ["Python", "XGBoost", "SQL"],
                link: "",
                createdAt: new Date("2024-01-01T00:00:00Z"),
            },
        ];
        return projects;
    } catch (error) {
        throw new Error('Error fetching projects');
    }
}