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
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h1>🌿 Breathe计划 · 第1周</h1>
      {tasks.map((t, i) => (
        <div key={i} style={{ margin: '1rem 0', padding: '0.5rem', border: '1px solid #ccc', cursor: 'pointer' }} onClick={() => toggle(i)}>
          <h2 style={{ textDecoration: checked[i] ? 'line-through' : 'none' }}>{t.title} <small>({t.duration})</small></h2>
          <p>🕓 {t.time}</p>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{t.note}</p>
        </div>
      ))}
      <button onClick={() => setChecked({})}>🔁 重置今日进度</button>
    </div>
  );
}
