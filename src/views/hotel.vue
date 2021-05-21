<template>
  <div class="home">
    <div>
      <el-input v-model="query" placeholder="Please input the Country" style="width: 200px"></el-input>
      <el-button type="primary" icon="el-icon-search" @click="getList">Search</el-button>
    </div>
    <div>
      <el-table
          :data="list"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="name"
            width="180">
        </el-table-column>
        <el-table-column
            prop="destinationId"
            label="destinationId"
            width="180">
        </el-table-column>
        <el-table-column
            prop="landmarkCityDestinationId"
            label="landmarkCityDestinationId"
            width="180">
        </el-table-column>
        <el-table-column
            prop="geoId"
            label="geoId"
            width="180">
        </el-table-column>
        <el-table-column
            prop="latitude"
            label="latitude"
            width="180">
        </el-table-column>
        <el-table-column
            prop="longitude"
            label="longitude"
            width="180">
        </el-table-column>
        <el-table-column
            prop="redirectPage"
            label="redirectPage"
            width="180">
        </el-table-column>
        <el-table-column
            prop="searchDetail"
            label="searchDetail"
            width="180">
        </el-table-column>
        <el-table-column
            prop="caption"
            label="caption"
            width="180">
          <template slot-scope="scope">
              <div v-html="scope.row.caption"></div>
          </template>
        </el-table-column>
        <el-table-column
            prop="address"
            label="address">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from '../utils/axios'
export default {
  name: 'Home',
  components: {

  },
  data(){
    return {
      query:"new york",
      list:[]
    }
  },
  mounted() {
    this.getList();
  },
  methods:{
    getList(){
      axios.get('/api/locations/search',{params:{
          "query": this.query,
          "locale": "en_US"
        },
      }).then((res) => {
        this.list = res.suggestions.filter((item) => {
          return item.group == 'HOTEL_GROUP'
        })[0].entities
      })
    }
  }
}
</script>
<style lang="less">

</style>
