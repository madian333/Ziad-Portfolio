export default function AboutSection() {
    return (
      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold">About Me</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="mt-2">
              <strong>Bachelor of Science in Computer Science</strong><br />
              Ain Shams University, Cairo, Egypt (2022-2026)
            </p>
            <h3 className="mt-6 text-xl font-semibold">Skills</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              <li>• Python</li>
              <li>• Machine Learning</li>
              <li>• C++</li>
              <li>• SQL</li>
              <li>• Java</li>
              <li>• TensorFlow</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Achievements</h3>
            <p className="mt-2">
              <strong>Top 2 in Machine Learning Contest</strong><br />
              APPLI 2023
            </p>
          </div>
        </div>
      </section>
    );
  }