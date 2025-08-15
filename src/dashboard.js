const express = require('express');

const dashboardRouter = express.Router();

// API để lấy dữ liệu tài nguyên
dashboardRouter.get('/resource', (req, res) => {
  // Giả sử chúng ta gọi một dịch vụ bên ngoài để lấy dữ liệu
  res.json({ cpu: '40%', ram: '2GB', bandwidth: '50Mbps' });
});

module.exports = dashboardRouter;
