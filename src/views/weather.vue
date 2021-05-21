<template>
  <div class="home">
    <div>
      <el-input v-model="query" placeholder="Please input the country" style="width: 200px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getList">Search</el-button>
    </div>
    <div>
      <div>cloud: {{detail.cloud}}</div>
      <div>condition:
        <div>text: {{detail.condition.text}}</div>

          <div>code: {{detail.condition.code}}</div>
      </div>
      <div>feelslike_c: {{detail.feelslike_c}}</div>
      <div>feelslike_f: {{detail.feelslike_f}}</div>
      <div> gust_kph: {{detail.gust_kph}}</div>
      <div> gust_mph: {{detail.gust_mph}}</div>
      <div>humidity: {{detail.humidity}}</div>
      <div>is_day: {{detail.is_day}}</div>
      <div> last_updated: {{detail.last_updated}}</div>
      <div>last_updated_epoch: {{detail.last_updated_epoch}}</div>
      <div>precip_in: {{detail.precip_in}}</div>
      <div>precip_mm: {{detail.precip_mm}}</div>
      <div>pressure_in: {{detail.pressure_in}}</div>
      <div>pressure_mb: {{detail.pressure_mb}}</div>
      <div>temp_c: {{detail.temp_c}}</div>
      <div>temp_f: {{detail.temp_f}}</div>
      <div>uv: {{detail.uv}}</div>
      <div>vis_km: {{detail.vis_km}}</div>
      <div>vis_miles: {{detail.vis_miles}}</div>
      <div>wind_degree: {{detail.wind_degree}}</div>
      <div> wind_dir: {{detail.wind_dir}}</div>
      <div>wind_kph: {{detail.wind_kph}}</div>
      <div>wind_mph: {{detail.wind_mph}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      query:"London",
      detail:{}
    }
  },
  mounted() {
    this.getList();
  },
  methods:{
    getList(){
      const that = this;
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {q: this.query, days: '1'},
        headers: {
          'x-rapidapi-key': '354651ce5emsh14b1bdce4a54986p1a157cjsnb87ca2bc5d07',
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data.current);
        that.detail = response.data.current
      }).catch(function (error) {
        console.error(error);
      });


    }
  }
}
</script>
<style lang="less">

</style>

