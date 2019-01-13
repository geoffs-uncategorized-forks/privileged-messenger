<template>
  <div id="dashboard-wrapper">
    <shared-nav-bar/>
    <div class="columns" id="mail-app">
      <aside class="column is-2 aside hero is-fullheight">
        <div>
          <div class="compose has-text-centered">
            <a class="button is-danger is-block is-bold">
              <span class="compose">Compose</span>
            </a>
          </div>
          <div class="main">
            <a href="#" class="item active"><span class="icon"><i class="fa fa-inbox"></i></span><span class="name">Inbox</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-star"></i></span><span
              class="name">Starred</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-envelope-o"></i></span><span class="name">Sent Mail</span></a>
            <a href="#" class="item"><span class="icon"><i class="fa fa-folder-o"></i></span><span
              class="name">Folders</span></a>
          </div>
        </div>
      </aside>
      <div class="column is-4 messages hero is-fullheight" id="message-feed">
        <div class="action-buttons">
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-chevron-down"></i></a>
            <a @click=refreshMessages class="button is-small"><i class="fa fa-refresh"></i></a>
          </div>
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-inbox"></i></a>
            <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
            <a class="button is-small"><i class="fa fa-trash-o"></i></a>
          </div>
          <div class="control is-grouped">
            <a class="button is-small"><i class="fa fa-folder"></i></a>
            <a class="button is-small"><i class="fa fa-tag"></i></a>
          </div>
          <div class="control is-grouped pg">
            <div class="title">{{ paginate.pointer.start }}-{{ paginate.pointer.end }} of {{ paginate.total }}</div>
            <a class="button is-link"><i class="fa fa-chevron-left"></i></a>
            <a class="button is-link"><i class="fa fa-chevron-right"></i></a>
          </div>
        </div>

        <div class="inbox-messages" id="inbox-messages">
          <div v-for="(msg, index) in messages" class="card" v-bind:key="'msg-card-'+index"
               v-on:click="showMessage(msg,index)" v-bind:data-preview-id="index">
            <div class="card-content">
              <div class="msg-header">
                <span class="msg-from"><small>From: {{ msg.from }}</small></span>
                <span class="msg-timestamp"></span>
                <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
              </div>
              <div class="msg-subject">
                <span class="msg-subject"><strong id="fake-subject-1">{{ msg.subject }}</strong></span>
              </div>
              <div class="msg-snippet">
                <p id="fake-snippet-1">{{ msg.snippet }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dashboard-message-pane />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/dansup/bulma-templates">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import SharedNavBar from '~/components/SharedNavBar'
  import DashboardMessagePane from '~/components/DashboardMessagePane'

  export default {
    components: {
      DashboardMessagePane,
      SharedNavBar
    },
    asyncData (context) {
      // called every time before loading the component
      // as the name said, it can be async
      // Also, the returned object will be merged with your data object
      return {name: 'World'}
    },
    middleware: 'auth',
    data () {
      return {
        paginate: {
          pointer: {
            start: 1,
            end: 10
          },
          total: 100
        },
        selectedMessage: null
      }
    },
    computed: mapState({
      // arrow functions can make the code very succinct!
      messages: state => state.inbox.messages
    }),
    methods: {
      showMessage (msg, index) {
        console.log('showMessage', msg, index)
        this.selectedMessage = msg
      },
      async refreshMessages () {
        this.$nuxt.$loading.start()

        this.paginate.total = Math
          .round(Math.random() * (54236 - 100) + 3)
          .toLocaleString()

        await this.$store.dispatch('inbox/refresh')

        this.$nuxt.$loading.finish()
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.refreshMessages()
      })
    }
  }
</script>

<style lang=scss>

  .nav.is-dark {
    background-color: #232B2D;
    color: #F6F7F7;
  }

  .nav.is-dark .nav-item a, .nav.is-dark a.nav-item {
    color: #F6F7F7;
  }

  .nav.is-dark .nav-item a.button.is-default {
    color: #F6F7F7;
    background-color: transparent;
    border-width: 2px;
  }

  .nav.menu {
    border-bottom: 1px solid #e1e1e1;
  }

  .nav.menu .nav-item .icon-btn {
    border: 3px solid #B7C6C9;
    border-radius: 90px;
    padding: 5px 7px;
    color: #B7C6C9;
  }

  .nav.menu .nav-item.is-active .icon-btn {
    color: #2EB398;
    border: 3px solid #2EB398;
  }

  .nav.menu .nav-item .icon-btn .fa {
    font-size: 20px;
    color: #B7C6C9;
  }

  .nav.menu .nav-item.is-active .icon-btn .fa {
    color: #2EB398;
  }

  .aside {
    display: block;
    background-color: #F9F9F9;
    border-right: 1px solid #DEDEDE;
  }

  .messages {
    display: block;
    background-color: #fff;
    border-right: 1px solid #DEDEDE;
  }

  .aside .compose {
    height: 95px;
    margin: 0 -10px;
    padding: 25px 30px;
  }

  .aside .compose .button {
    color: #F6F7F7;
  }

  .aside .compose .button .compose {
    font-size: 14px;
    font-weight: 700;
  }

  .aside .main {
    padding: 40px;
    color: #6F7B7E;
  }

  .aside .title {
    color: #6F7B7E;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .aside .main .item {
    display: block;
    padding: 10px 0;
    color: #6F7B7E;
  }

  .aside .main .item.active {
    background-color: #F1F1F1;
    margin: 0 -50px;
    padding-left: 50px;
  }

  .aside .main .item:active, .aside .main .item:hover {
    background-color: #F2F2F2;
    margin: 0 -50px;
    padding-left: 50px;
  }

  .aside .main .icon {
    font-size: 19px;
    padding-right: 30px;
    color: #A0A0A0;
  }

  .aside .main .name {
    font-size: 15px;
    color: #5D5D5D;
    font-weight: 500;
  }

  .messages {
    padding: 40px 20px;
  }

  .messages .action-buttons {
    padding: 0;
    margin-top: -20px;
  }

  .message .action-buttons {
    padding: 0;
    margin-top: -5px;
  }

  .action-buttons .control.is-grouped {
    display: inline-block;
    margin-right: 30px;
  }

  .action-buttons .control.is-grouped:last-child {
    margin-right: 0;
  }

  .action-buttons .control.is-grouped .button:first-child {
    border-radius: 5px 0 0 5px;
  }

  .action-buttons .control.is-grouped .button:last-child {
    border-radius: 0 5px 5px 0;
  }

  .action-buttons .control.is-grouped .button {
    margin-right: -5px;
    border-radius: 0;
  }

  .pg {
    display: inline-block;
    top: 10px;
  }

  .action-buttons .pg .title {
    display: block;
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 3px;
    font-size: 12px;
    color: #AAAAA;
  }

  .action-buttons .pg a {
    font-size: 12px;
    color: #AAAAAA;
    text-decoration: none;
  }

  .is-grouped .button {
    background-image: linear-gradient(#F8F8F8, #F1F1F1);
  }

  .is-grouped .button .fa {
    font-size: 15px;
    color: #AAAAAA;
  }

  .inbox-messages {
    margin-top: 60px;
  }

  .inbox-messages .card {
    width: 100%;
  }

  .inbox-messages strong {
    color: #5D5D5D;
  }

  .inbox-messages .msg-check {
    padding: 0 20px;
  }

  .inbox-messages .msg-subject {
    padding: 10px 0;
    color: #5D5D5D;
  }

  .inbox-messages .msg-attachment {
    float: right;
  }

  .inbox-messages .msg-snippet {
    padding: 5px 20px 0px 5px;
  }

  .inbox-messages .msg-subject .fa {
    font-size: 14px;
    padding: 3px 0;
  }

  .inbox-messages .msg-timestamp {
    float: right;
    padding: 0 20px;
    color: #5D5D5D;
  }

  .avatar img {
    width: 40px;
    border-radius: 50px;
    border: 2px solid #999;
    padding: 2px;
  }

  .address .name {
    font-size: 16px;
    font-weight: bold;
  }

  .card.active {
    background-color: #F5F5F5;
  }

</style>
