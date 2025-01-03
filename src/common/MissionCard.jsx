import "../styles/MissionCard.css";

export function MissionCard() {
  return (
    <div className="mission-list">
      <h2>Complete today's missions and earn points!</h2>
      <div className="grid">
        <div className="mission-card">
          <h3>Attendance Check Mission</h3>
          <p className="description">+10 P Earned!</p>
        </div>

        <div className="mission-card">
          <h3>
            Reply to Topic
            <br /> Mission
          </h3>
          <p className="description">Not completed yet</p>
        </div>

        <div className="mission-card">
          <h3>Study Certification Mission</h3>
          <p className="description">Not completed yet</p>
        </div>

        <div className="mission-card">
          <h3>Answer a Question Mission</h3>
          <p className="description">+10 P Earned!</p>
        </div>
      </div>
    </div>
  );
}

// export function MissionCard() {
//   const missions = [
//     { title: "출석체크 미션", description: "+10 P 획득!" },
//     { title: "주제 답글 미션", description: "아직 안했어요" },
//     { title: "공부 인증하기 미션", description: "아직 안했어요" },
//     { title: "질문에 답변해보기", description: "+10 P 획득!" },
//   ];

//   return (
//     <div className="mission-list">
//       <h2>오늘의 미션을 수행하고 포인트를 얻어보세요!</h2>
//       <div className="grid">
//         {missions.map((mission, index) => (
//           <MissionCardItem
//             key={index}
//             title={mission.title}
//             description={mission.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function MissionCardItem({ title, description }) {
//   return (
//     <div className="mission-card">
//       <h3>{title}</h3>
//       <p className="description">{description}</p>
//     </div>
//   );
// }
