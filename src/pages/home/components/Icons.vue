<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" v-bind:src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png",
          desc: "天坛公园"
        },
        {
          id: "0002",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0003",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0004",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0005",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0006",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0007",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0008",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        },
        {
          id: "0009",
          imgUrl:
            "https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png",
          desc: "文化古迹"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons  >>> .swiper-container
  width:100%
  height:0
  padding-bottom:50%

.icon
    position :relative
    overflow :hidden
    float:left
    width:25%
    height:0
    padding-bottom :25%
    .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding:.1rem
        .icon-img-content
            display:block
            margin 0 auto
            height:100%
    .icon-desc
       position :absolute
       left:0
       right:0
       bottom:0
       height:.44rem
       line-height :.44rem
       color:#darkTextColor
       text-align :center
       ellipsis()
</style>
