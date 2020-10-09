<template>
  <div class="bg-white">
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-blue"></base-header>
    <b-container fluid class="mt--7">
      <b-row>
          <div class="container">
            <div class="product-catagory-wrap c-area">
              <div class="row g-3">
                <!-- 카테고리 1 -->
                <b-col xl="6" class="mb-3">
                  <div class="card catagory-card">
                    <div class="card-body"><a href="#"><span>한 문제씩 풀기</span></a></div>
                  </div>
                </b-col>
                <!-- 카테고리 2 -->
                <b-col xl="6" class="mb-3">
                  <div class="card catagory-card">
                    <div class="card-body"><a href="#"><span>문제와 답(해설)</span></a></div>
                  </div>
                </b-col>
              </div>
            </div>
          </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  // Components
  import BaseProgress from '@/components/BaseProgress';
  import StatsCard from '@/components/Cards/StatsCard';

  // Tables
  import SocialTrafficTable from './Dashboard/SocialTrafficTable';
  import PageVisitsTable from './Dashboard/PageVisitsTable';

  export default {
    components: {
      BaseProgress,
      StatsCard,
      PageVisitsTable,
      SocialTrafficTable
    },
    mounted() {
      this.initBigChart(0);
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }    
  };
</script>
<style>
.card-box{
  box-shadow: 0px 2px 2px 2px #d7def4;
  position: relative;
  z-index: 1;
  text-align: center;
  border-radius: 0.75rem;
}
.card-h{
  min-height: 100px;
}
.catagory-card {
    position: relative;
    z-index: 1;
    text-align: center;
    border-radius: 0.75rem;
}
.card {
    border-color: transparent !important;
    border-radius: 0.75rem;
    -webkit-box-shadow: 0px 2px 2px 2px #d7def4;
    box-shadow: 0px 2px 2px 2px #d7def4;
    position: relative;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    padding: 1.5rem;
}
.card .card-body {
    padding: 2rem;
}
.catagory-card span {
    -webkit-transition-duration: 500ms;
    transition-duration: 500ms;
    display: block;
    font-size: 16px;
    font-weight: 700;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 1;
    color: #747794;
}
.c-area{
  min-height: 708px;
}
</style>
