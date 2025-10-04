// Simple test server to verify setup
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Test server is running!',
    timestamp: new Date().toISOString()
  });
});

// Test email endpoint (no Resend, just echo back)
app.post('/api/send-email', (req, res) => {
  console.log('📧 Test email request received');
  console.log('Data:', req.body);
  
  // Just return success without actually sending
  res.json({ 
    success: true, 
    messageId: 'test-' + Date.now(),
    message: 'This is a TEST response. Email would be sent to: aggelos@antiparosrentacar.com & fotiskoukakis@gmail.com'
  });
});

app.listen(PORT, () => {
  console.log('\n✅ TEST SERVER RUNNING');
  console.log(`🔗 http://localhost:${PORT}`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log(`📧 Email endpoint ready (TEST MODE - no real emails sent)\n`);
});
