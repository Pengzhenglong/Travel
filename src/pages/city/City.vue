<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.handleGetCityIngoSucc);
    },
    handleGetCityIngoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handLetterChange(letter) {
      // console.log(letter);
      this.letter = letter;
    }
  },
  // 存放数据
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  // 生命周期函数
  mounted() {
    this.getCityInfo();
  }
};
</script>
<style lang="stylus" scoped></style>
