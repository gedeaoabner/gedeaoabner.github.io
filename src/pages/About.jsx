import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section id="section-about"  className="container">
        <section className="container-center row">
          <section id="section-profile" className="col-6">
            <img
              id="picture-about"
              className="picture"
              src="https://avatars.githubusercontent.com/u/14238131"
              alt="Gedeão Abner smiling"
            />
          </section>
          <section id="section-aboutText" className="col-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid accusamus, iure voluptatum consequatur quia quisquam laborum ullam similique sed iste dignissimos beatae excepturi, saepe officia, id distinctio! Fugit, explicabo accusamus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aspernatur, quia commodi blanditiis expedita adipisci numquam doloribus at, laboriosam aperiam placeat iste. Facilis, ullam quisquam. Ad ab quidem eaque ex Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae obcaecati similique ea incidunt inventore tenetur voluptatibus totam! Distinctio rerum eligendi nam quae soluta deserunt temporibus suscipit delectus minus amet.
          </section>
        </section>
      </section>
    );
  }
}

export default About;
