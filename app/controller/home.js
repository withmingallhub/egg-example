'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  //登陆页面
  async login(){
    await this.ctx.render('login',{username: '颜狗'})
  }
  //注册接口
  async register(){
    let { username } = this.ctx.query
    let { password } = this.ctx.query
    if(username === '' || password === '') {
      this.ctx.body = { status: 0,msg: '用户名或密码不能为空'}
      return;
    }
    this.ctx.session.username = username
    
    return this.ctx.body = {status: 1,msg: '登陆成功！',data: username}
  }
  async chatroom(){
    await this.ctx.render('chatroom')
  }
}

module.exports = HomeController;
