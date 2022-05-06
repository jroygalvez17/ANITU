<template>
  <div class="lineChart">
    <div id="chartContainer" style="margin: 30px">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { ref, computed } from "vue";
import axios from "axios";

let Average = [];
let Hertz = [];
let historyDates = [];
let date = [];
let myChart;
myChart;

export default {
  name: "LineChart",
  mounted() {
    this.createDuration();
    this.updateSensorChart();
  },
  setup() {
    let updateSensorChart = () => {
      const ctx = document.getElementById("myChart");

      const labels = date;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "First Value of 128 SAMPLES",
            data: Average,
            fill: false,
            borderColor: "rgb(0,0,255)",
            tension: 0,
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          },
          {
            label: "Converted to Hertz",
            data: Hertz,
            fill: false,
            borderColor: "rgb(255,0,0)",
            tension: 0,
            options: {
              responsive: true,
              maintainAspectRatio: false,
            },
          },
        ],
      };

      //let myChart = null;

      const chartWithKey = Chart.getChart("myChart");
      if (chartWithKey != undefined) {
        chartWithKey.destroy();
      }

      myChart = new Chart(ctx, {
        type: "line",
        data: data,
      });
    };

    let readingsAPI = computed(() => {
      return "http://192.168.100.43:5000/api/sound/view";
    });

    console.log(readingsAPI.value);

    let createDuration = (dateRange) => {
      axios.get(readingsAPI.value).then((response) => {
        historyDates = response;

        for (const property in historyDates.data) {
          let arrAverage = historyDates.data[property]["Average"];
          let arrHertz = historyDates.data[property]["Hertz"];
          let arrDate = historyDates.data[property]["date"];

          let d = new Date(arrDate);
          const month = d.getMonth();
          const day = d.getDate();
          const hours = d.getHours();
          const minute = d.getMinutes();
          const mSeconds = d.getSeconds();

          arrDate = month + "/" + day + " " + hours + ":" + minute+":"+mSeconds;
          //console.log(arrDate)
          Average.unshift(arrAverage);
          Hertz.unshift(arrHertz);
          date.unshift(arrDate);
        }
        Average.reverse();
        Hertz.reverse();
        date.reverse();

        console.log(Average);
        console.log(Hertz);
        console.log(date);

        dateRange = Date;
      });

      updateSensorChart();
    };

    return {
      updateSensorChart,
      createDuration,
    };
  },
};
</script>
