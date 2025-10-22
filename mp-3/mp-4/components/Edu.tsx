export default function Edu() {
  <title>Education | Alex Resume</title>
  return (
    <main>
      <div className="about-container">
        <div className="college-icons">
          <img src="BU.png" alt="Boston University logo" className="icon-photo" />
          <img src="SU.png" alt="Syracuse University logo" className="icon-photo" />
        </div>

        <p>
          I studied computer science at{" "}
          <a href="https://www.syracuse.edu/">Syracuse University</a> for two years.
          I am currently attending{" "}
          <a href="https://www.bu.edu/">Boston University</a>.
        </p>
      </div>
    </main>
  );
  }