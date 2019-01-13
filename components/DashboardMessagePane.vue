<template>
    <div class="column is-6 message hero is-fullheight" id="message-pane">
        <div class="action-buttons">
            <div class="control is-grouped">
                <a class="button is-small"><i class="fa fa-inbox"></i></a>
                <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                <a class="button is-small"><i class="fa fa-trash-o"></i></a>
            </div>
            <div class="control is-grouped">
                <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
                <a class="button is-small"><i class="fa fa-trash-o"></i></a>
            </div>
            <div class="control is-grouped">
                <a class="button is-small"><i class="fa fa-folder"></i></a>
                <a class="button is-small"><i class="fa fa-tag"></i></a>
            </div>
        </div>
        <div class="box message-preview">
            <div class="top">
                <div class="avatar">
                    <img :src="currentUser.picture">
                </div>
                <div class="address">
                    <div class="name">{{ currentUser.name }}</div>
                    <div class="email">{{ currentUser.email }}</div>
                </div>
                <hr>
                <div class="content">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'DashboardMessagePane',
    computed: {
      currentUser () {
        return this.$store.state.auth.user
      }
    },
    mounted () {
      console.log(this.$store.state.auth.user)
    }
  }
</script>
<style lang=scss>

    .nav.menu .nav-item .icon-btn .fa {
        font-size: 20px;
        color: #B7C6C9;
    }

    .nav.menu .nav-item.is-active .icon-btn .fa {
        color: #2EB398;
    }

    .message {
        display: block;
        background-color: #fff;
    }

    .aside .compose .button {
        color: #F6F7F7;
    }

    .aside .main .name {
        font-size: 15px;
        color: #5D5D5D;
        font-weight: 500;
    }

    .message {
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

    .message-preview {
        margin-top: 60px;
    }

    .inbox-messages strong {
        color: #5D5D5D;
    }

    .inbox-messages .msg-subject .fa {
        font-size: 14px;
        padding: 3px 0;
    }

    .message-preview .avatar {
        display: inline-block;
    }

    .message-preview .top .address {
        display: inline-block;
        padding: 0 20px;
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

    .address .email {
        font-weight: bold;
        color: #B6C7D1;
    }

</style>
