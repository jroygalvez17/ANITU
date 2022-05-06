<template>
  <div class="row">
    <div class="column">
      <div class="card">
        <img src="../assets/cezar.jpg" alt="Avatar" style="width: 28.5%" />
        <div class="container">
          <h2><b>Alquin Cezar</b></h2>
          <p><b>Position: </b>Instructor 1</p>
          <p><b>Degree: </b>Master of Engineering in Computer Engineering</p>
          <p><b>Organization: </b>Rizal Technological University - Boni</p>
          <p><b>Description: </b>An Instructor assigned at the College of Engineering, Architecture and Technology - Computer Engineering Department. His especializations are Computer Hardware and Network subjects, such as Printed Circuit Board Development, Logic Circuits, and Network 1 & 2. </p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="card">
        <img src="../assets/johnroy.jpg" alt="Avatar" style="width: 30%" />
        <div class="container">
          <h2><b>John Roy Galvez</b></h2>
          <p><b>Position: </b>Special Science Teacher 1</p>
          <p><b>Degree: </b>Master of Engineering in Computer Engineering</p>
          <p><b>Organization: </b>Camarines Sur National High School</p>
          <p><b>Description: </b>A secondary high school teacher teaching ICT related subjects in Grades 8 -11 as a Return of
          Service in DOST-JLSS. His specialization focuses in Programming and Machine Learning. Curretly working with game developers in creating VR and 2D/3D application for the promotion of Bicol.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
p{
  text-align: justify;
}
img {
  border-radius: 50%;
}
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 50%;
  padding: 20px 10px;
}

/* Remove extra left and right margins, due to padding in columns */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

/* Responsive columns - one column layout (vertical) on small screens */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
