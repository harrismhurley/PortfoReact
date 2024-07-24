import profImage from "../../assets/profile/profile.png"

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img 
          src={profImage} 
          alt="Profile Image" 
          style={{ width: "96px", height: "96px", borderRadius: "50%" }}/>
        </div>
        <p>
        “Sincerity does not only complete the self; it is the means by which all things are completed. As the self is completed, there is human-heartedness; as things are completed, there is wisdom. This is the virtue of one’s character, and the Way of joining the internal and external. Thus, when we use this, everything is correct.”     
        </p>
        <p>― Yamamoto Tsunetomo, Hagakure: The Book of the Samurai </p>
        &nbsp;
        <p>
        Software Engineer with a strong foundation in software development, data analysis, and algorithm design. Skilled in advanced data processing and problem-solving. Eager to apply technical knowledge to real-world challenges. Passionate about continuous learning and contributing to innovative projects within a collaborative team environment.
        </p>
      </div>
    </section>
  );
}

export default About;