//# 스타일 파일 호출
import './Practice.css';
//# 컴포넌트 호출
import DefinitionList from './DefinitionList';
import Controller from './parts/Controller'

/* -------------------------------------------------------------------------- */

function Practice() {
  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />
      
      {/* 컴포넌트 추출(Extracting Component) */}
      <DefinitionList />
      {/* Controller /> 컴포넌트 분리(추출)하기 */}
      
      <Controller />
    </div>

  );
}

export default Practice;
