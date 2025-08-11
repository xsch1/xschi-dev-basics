import { useState } from 'react';
import sad from './assets/mamechiSad.png'; // 슬픈(기본) 이미지
import happy from './assets/mamechiHappy.png'; // 기쁜 이미지
import './App.css';

export default function App() {
  const [like, setLike] = useState(0);

  const atGoal = like >= 100; // 100 이상이면 목표 달성
  const imgSrc = atGoal ? happy : sad; // 이미지 스위치

  // 호감도 증가 함수
  // 100을 초과하지 않도록 제한
  // 리셋 함수는 호감도를 0으로 초기화
  const addLike = () => setLike((v) => Math.min(v + 1, 100));
  const reset = () => setLike(0);

  return (
    <>
      <div>
        <img
          src={imgSrc}
          className={`logo ${atGoal ? 'celebrate' : ''}`}
          alt="마메치"
        />
      </div>

      <h1>MAMECHI</h1>

      <div
        className="card"
        style={{
          gap: 12,
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <button onClick={addLike} disabled={atGoal}>
          호감도 +1 (현재 {like})
        </button>
        <button onClick={reset} style={{ opacity: 0.7 }}>
          리셋
        </button>
        {atGoal ? (
          <p style={{ color: '#16a34a', margin: 0 }}>
            마메치의 기분이 좋아보입니다. 🎉
          </p>
        ) : (
          <p style={{ margin: 0 }}> 마메치는 조용하고 똑똑합니다.</p>
        )}
      </div>

      <p className="read-the-docs" style={{ opacity: 0.6 }}>
        호감도가 100이 되면 마메치가 기뻐해요.
      </p>
    </>
  );
}
