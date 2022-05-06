<template>
  <div class="row">
    <div class="column" style="width: 65%; height: 5vw">
      <div class="card">
        <div class="container" >
          <h2 style="text-align: left;">
            Using FFT to identify Max Peak of Sound Sensor
          </h2>
          <HelloWorld />
        </div>
      </div>
    </div>

    <div class="column" style="width: 35%; height: 5vw">
      <div class="card">
        <div class="container">
          <h3>General Problem</h3>
          <p>
            There has been an increasing report on illegal activities in the forest of the Philippines and authorities are having a hard time monitoring, recording, and tracking down different group. Furthermore, the illegal activities cannot be easily identified. In addition, forest rangers and authorities cannot secure the forest 24/7 which give the illegal loggers time to execute their activities.
          </p>
          <h3>General Objective</h3>
          <p>
            The goal of this project is to aid the authorities to cracked down illegal activities in the forest using unmanned device through sound recognition, also to reduce the risk of the Forest Rangers in patrolling forest.
          </p>
          <h3>Target Beneficiaries</h3>
          <p>
            Authorities,Forest Ranger, Community, Environment, Future Researchers 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
p {
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

/* Float columns side by side */
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
    margin-bottom: 50px;
  }
}
</style>
