import { useState } from "react";

export default function BreathePlan() {
  const [checked, setChecked] = useState({});

  const tasks = [
    {
      time: "起床后 or 午休后",
      title: "呼吸觉察练习（正念）",
      duration: "5分钟",
      note: "不强求清净，只要觉察就好"
    },
    {
      time: "学习时",
      title: "番茄钟（25+5）+ 白噪音",
      duration: "1次",
      note: "有旋律干扰就写下来，然后继续"
    },
    {
      time: "睡前",
      title: "“Breathe”冥想练习（App/语音）",
      duration: "5~10分钟",
      note: "静下来，把今天的节奏慢下来"
    }
  ];

  const toggleCheck = (index) => {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>🌿 Breathe计划 · 第1周</h1>
      <p style={{ textAlign: 'center', color: 'gray' }}>
        每日小练习，用呼吸带你回到自己
      </p>

      {tasks.map((task, index) => (
        <div
          key={index}
          onClick={() => toggleCheck(index)}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            marginTop: '1rem',
            backgroundColor: checked[index] ? '#f0f0f0' : '#fff',
            cursor: 'pointer'
          }}
        >
          <h2 style={{ textDecoration: checked[index] ? 'line-through' : 'none' }}>{task.title}</h2>
          <p>🕓 {task.time} - {task.duration}</p>
          <p style={{ fontStyle: 'italic', color: 'gray' }}>{task.note}</p>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button onClick={() => setChecked({})}>🔁 重置今日进度</button>
      </div>
    </div>
  );
}
