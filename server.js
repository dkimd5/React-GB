var webPush = require('web-push');

const PORT = process.env.PORT || 3001;

// Про GCM_API_KEY вы можете подробнее узнать из
// https://developers.google.com/cloud-messaging/
webPush.setGCMAPIKey(process.env.GCM_API_KEY || null);
// В данном примере мы будем рассматривать только route'ы в express.js
module.exports = function (app, route) {
  app.post(route + 'register', function (req, res) {
    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function (req, res) {
    setTimeout(function () {
      // Для отправки сообщения с payload, подписка должна иметь ключи 'auth' и 'p256dh'.
      webPush.sendNotification({
        endpoint: req.body.endpoint,
        TTL: req.body.ttl,
        keys: {
          p256dh: req.body.key,
          auth: req.body.authSecret
        }
      }, req.body.payload)
        .then(function () {
          res.sendStatus(201);
        })
        .catch(function (error) {
          res.sendStatus(500);
          console.log(error);
        });
    }, req.query.delay * 1000);
  });
};