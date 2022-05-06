<template>
  <div>
    <div class="header">
      <h4>
        ANITU: A MACHINE LEARNING BASED DEVICE WITH SOUND RECOGNITION AND
        NOTIFICATION SYSTEM FOR FOREST CONSERVATION
      </h4>
    </div>

    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>Introduction</h2>
          <p style="text-align: justify">
            During the pre – colonial period in the Philippines, the Filipino
            ancestors, or the Ninuno¸ worships gods and goddesses of nature. The
            ninuno perform rituals for different things such as winning wars,
            having a bountiful harvest, even protecting their homes. The
            ancestors create human-like figurines that resembles a little human
            being, or what they called taotao. These little human like figures
            are also called Anito. Anitu or Anito is part of the Filipino
            Folklore which refers to the ancient or nature spirits. It is said
            that these spirits are inhabit the figurines, and serves as
            protector of shrines, forests, or sacred places.
          </p>
          <p style="text-align: justify">
            The Philippine land is covered by dense forest. It is one of the
            main sources of living and protecting the homes of the Pilipino
            people for many centuries from natural calamities such as
            landslides, flood, and devastating typhoons. The Philippines has
            abundant forestry, but also has a rapid population growth. Thus, the
            increase in demand of material for building houses.
          </p>
        </div>
        <div class="card">
          <h2>How to User the WebApp</h2>
          <p style="text-align: justify">
            This webapp aims to identify the hertz detected by the Sound Sensor
            integrated in the Arduino Uno R3 connected in Raspberry Pi 4 Model B
            serially. We perform Fast Fourier Transform (FFT) in 128 samples per
            upload where we use SAMPLING_FREQUENCY of 2048 which is based on
            Nyquist, must be 2 times the highest expected frequency. The
            arduinoFFT library in Arduino was able to identify the MarjoPeak in
            terms of Hertz which was verified using an app called Hertz
            Generator. The first sample on each run together with the equivalent
            hertz was then plotted in the graph in Application Page.
          </p>
        </div>
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2>Official Logo</h2>
          <img src="../assets/anitu.png" alt="Avatar" style="width: 100%" />
          <p>As a Final Requirement for MEMC 122-MCPE11S1 - Advanced Embedded Systems</p>
        </div>
        <div class="card">
          <h3>Popular Post</h3>
          <div class="fakeimg">ANITU</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <h3>Footer</h3>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  font-size: 30px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 5px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}
</style>
