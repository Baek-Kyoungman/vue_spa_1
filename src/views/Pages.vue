<template>
  <div class="bg-white">
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-blue"></base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center c-area">
        <b-col lg="12" class="mb-5">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">기사</h3>
            <b-row class="icon-examples">
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard"
                        link="http://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=&jmCd=1630&examInstiCd=1">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>건축기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>기계설계기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>산업안전기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>실내건축기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>전기기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>정보처리기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>토목기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>화공기사</span>
                  </div>
                </button>
              </b-col>
            </b-row>
          </card>
        </b-col>

        <b-col lg="12" class="mb-5">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">산업기사</h3>
            <b-row class="icon-examples">
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>건축산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>건설기계설비산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>산업안전산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>실내건축산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        v-clipboard:success="onCopy"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>전기산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>정보처리산업기사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>토목산업기사</span>
                  </div>
                </button>
              </b-col>
            </b-row>
          </card>
        </b-col>    

        <b-col lg="12" class="mb-5">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">기능사</h3>
            <b-row class="icon-examples">
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>실내건축기능사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>전기기능사</span>
                  </div>
                </button>
              </b-col>
              <b-col lg="3" md="8">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-button-play'"
                        title=""
                        data-original-title="Copy to clipboard">
                  <div>
                    <i class="ni ni-button-play"></i>
                    <span>정보처리기능사</span>
                  </div>
                </button>
              </b-col>
            </b-row>
          </card>
        </b-col>              
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';

  Vue.use(VueClipboard)
  export default {
    name: 'pages',
    components: {
      BaseHeader
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
