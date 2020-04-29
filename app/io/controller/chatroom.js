'use strict';

const Controller = require('egg').Controller;

class chatroom extends Controller {
  async sending() {
    console.log('aaadsfuh')
    const { ctx, app } = this;
    const message = ctx.args[0];
    message.username = ctx.session.username
    app.io.of('/').emit('returnMsg',message)
  }
}

module.exports = chatroom;