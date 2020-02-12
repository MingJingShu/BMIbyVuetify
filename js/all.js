$(document).ready(function() {
  console.log("hello This is {Pony all.js}");
  const app = new Vue({
    el: "#app",
    vuetify: new Vuetify(),
    data: {
      drawer: null,
      message: "Hello Vue!",
      windowSize: {
        x: 0,
        y: 0
      },
      logo:{src:'https://mingjingshu.github.io/BMIbyVuetify/images/logo.png'},
      Newheight: "",
      Newweight: "",
      playerData: [
        {
          id: "987",
          levelcolors: "light-green lighten-2",
          // good: "light-green lighten-2",
          // notgood: "light-blue lighten-2",
          // somebad: "amber",
          // bad: "orange",
          // verybad: "orange darken-3",
          // dangerbad: "orange darken-4"

          result: "理想",
          //     good: "理想",
          //     notgood: "過輕",
          //     somebad: "輕度肥胖",
          //     bad: "過重",
          //     verybad: "中度肥胖",
          //     dangerbad: "重度肥胖"
          pbmi: "",
          pweight: "",
          pheight: "",
          time: new Date().toLocaleString()
        }
      ]
    },
    mounted() {
      this.onResize();
    },
    methods: {
      onResize() {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        };
      },
      addresult: function() {
        let addweight = this.Newweight.trim();
        let addheight = this.Newheight.trim();
        let nowtime = new Date().toLocaleString();
        let timestamp = Math.floor(Date.now());
        let minaddheight = addheight / 100;

        let bmi = addweight / (minaddheight * minaddheight);
        let bmiget = bmi.toFixed(1);
        let bmiresult = "";
        let resultText = "";

        if (!addheight) {
          return;
        }
        if (!addheight) {
          return;
        }
        if (bmiget < 18.5) {
          bmiresult = "light-blue lighten-2";
          resultText = "過輕"
        }if (bmiget >= 18.5 && bmiget < 24) {
          bmiresult = "light-green lighten-2";
          resultText = "理想"
        }
        if (bmiget >= 24 && bmiget < 27) {
            bmiresult = "amber";
            resultText = "稍微過重"
         }if (bmiget >= 27 && bmiget < 30) {
           bmiresult = "amber";
           resultText = "輕度肥胖"
        }if (bmiget >= 30 && bmiget < 35) {
          bmiresult = "orange darken-3";
          resultText = "中度肥胖"
        }if (bmiget >= 35) {
          bmiresult = "orange darken-4";
          resultText = "重度肥胖"
        }
        console.log(bmiresult);
        this.playerData.push({
          id: timestamp,
          levelcolors: bmiresult,
          result:resultText,
          pbmi: bmiget,
          pweight: addweight,
          pheight: addheight,
          time: nowtime
        });
        console.log(addweight, addheight, nowtime, bmiget);
        this.Newweight = "";
        this.Newheight = "";
      }
    }
  });
}); //total
