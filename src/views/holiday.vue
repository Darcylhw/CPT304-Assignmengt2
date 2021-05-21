<template>
  <div class="home">
    <div>
      <el-date-picker
          v-model="year"
          type="year"
          placeholder="Choose year">
      </el-date-picker>
      <el-input v-model="query" placeholder="Please input the country" style="width: 200px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getList">Search</el-button>
    </div>
    <div>
      <el-table
          :data="list"
          style="width: 100%">
        <el-table-column
            prop="counties"
            label="counties"
            width="180">
        </el-table-column>

        <el-table-column
            prop="countryCode"
            label="countryCode">
        </el-table-column>
        <el-table-column
            prop="date"
            label="date">
        </el-table-column>
        <el-table-column
            prop="fixed"
            label="fixed">
        </el-table-column>
        <el-table-column
            prop="global"
            label="global">
        </el-table-column>
        <el-table-column
            prop="launchYear"
            label="launchYear">
        </el-table-column>
        <el-table-column
            prop="localName"
            label="localName">
        </el-table-column>
        <el-table-column
            prop="name"
            label="name">
        </el-table-column>
        <el-table-column
            prop="type"
            label="type">
        </el-table-column>
      </el-table>
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
      query:"US",
      year:"2019",
      list:[]
    }
  },
  mounted() {
    this.getList();
  },
  methods:{
    getList(){
      console.log(this.year);
      let year = (new Date(this.year)).getFullYear();
      console.log(year);
      const that = this;
      const options = {
        method: 'GET',
        url: `https://public-holiday.p.rapidapi.com/${year}/`+this.query,
        headers: {
          'x-rapidapi-key': '354651ce5emsh14b1bdce4a54986p1a157cjsnb87ca2bc5d07',
          'x-rapidapi-host': 'public-holiday.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        that.list = response.data
      }).catch(function (error) {
        console.error(error);
      });
      // axios.get('/api2/2019/US', null,{
      //   headers: {
      //     'x-rapidapi-key': '354651ce5emsh14b1bdce4a54986p1a157cjsnb87ca2bc5d07',
      //     'x-rapidapi-host': 'public-holiday.p.rapidapi.com'
      //   }
      // }).then((res) => {
      //   this.list = res.suggestions.filter((item) => {
      //     return item.group == 'HOTEL_GROUP'
      //   })[0].entities
      // })
    }
  }
}
</script>
<style lang="less">

</style>
