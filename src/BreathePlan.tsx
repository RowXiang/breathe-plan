import { useState } from 'react';

export default function BreathePlan() {
  const [checked, setChecked] = useState<{ [k: number]: boolean }>({});

  const tasks = [
    {
      time: '起床后 or 午休后',
      title: '呼吸觉察练习（正念）',
      duration: '5分钟',
      note: '不强求清净，只要觉察就好'
    },
    {
      time: '学习时',
      title: '番茄钟（25+5）+ 白噪音',
      duration: '1次',
      note: '有旋律干扰就写下来，然后继续'
    },
    {
      time: '睡前',
      title: '“Breathe”冥想练习（App/语音）',
      duration: '5分钟',
      note: '让思绪自然流动，不评判'
    }
  ];

  const toggle = (i: number) => {
    setChecked(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div style={{ maxWidth: '480px', margin: '2rem auto', padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '1.8rem' }}>🌿 Breathe 计划 · 第1周</h1>
      {tasks.map((task, i) => (
        <div
          key={i}
          onClick={() => toggle(i)}
          style={{
            margin: '1rem 0',
            padding: '1rem',
            borderRadius: '12px',
            background: checked[i] ? '#d0f0d0' : '#f4f4f4',
            border: '1px solid #ccc',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ marginBottom: '0.5rem', textDecoration: checked[i] ? 'line-through' : 'none' }}>{task.title} <small>（{task.duration}）</small></h2>
          <p>🕓 {task.time}</p>
          <p style={{ fontStyle: 'italic', color: '#555' }}>{task.note}</p>
        </div>
      ))}
      <button
        onClick={() => setChecked({})}
        style={{
          display: 'block',
          margin: '2rem auto 0',
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4caf50',
          color: '#fff',
          cursor: 'pointer'
        }}
      >🔁 重置今日进度</button>
    </div>
  );
}

