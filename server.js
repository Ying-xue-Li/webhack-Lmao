const express = require('express');
const bodyParser = require('body-parser');
const { createChatGPT } = require('chatgpt');

const app = express();
const port = 3001;

// 创建 ChatGPT 实例
const chatGPT = createChatGPT({ apiKey: 'your-api-key' });

// 解析请求体中的 JSON 数据
app.use(bodyParser.json());

// 定义 /api/completeTask 端点的处理逻辑
app.post('/api/completeTask', async (req, res) => {
  const { taskName } = req.body;

  try {
    // 调用 ChatGPT API 完成任务
    const response = await chatGPT.completeTask(taskName);

    // 返回任务拆分后的结果
    res.json({ tasks: response.tasks });
  } catch (error) {
    console.error('Error completing task:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
