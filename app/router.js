'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/login',controller.home.login)
  router.get('/register',controller.home.register)
  router.get('/chatroom', controller.home.chatroom)

  const nsp = io.of('/');
  const { chatroom: cr } = io.controller
  nsp.route('sending',cr.sending)

};
