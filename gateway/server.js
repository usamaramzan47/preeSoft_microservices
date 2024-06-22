const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use('/api/auth', createProxyMiddleware({ target: 'http://localhost:5000/api/auth', changeOrigin: true }));
app.use('/api/posts', createProxyMiddleware({ target: 'http://localhost:5001/api/posts', changeOrigin: true }));

const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`API Gateway running on port ${port}`));
