module.exports = app => {
    return async (ctx, next) => {
    //   ctx.socket.emit('res', 'connected!');
    console.log('connect')
      await next();
      // execute when disconnect.
      console.log('leavle');
    };
};