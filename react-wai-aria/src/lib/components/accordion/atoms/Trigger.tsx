import React, { ReactNode } from 'react';

interface TriggerProps {
  className?: string;
  id?: string;
  ariaControls?: string;
  expanded?: boolean;
  setExpanded?: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

// @name Trigger : 아코디언 트리거
// @referance : https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
// @desc WAI-ARIA 1.2 기준에 맞춰 아코디언 패널을 마크업하고 이벤트를 부여한다.
// @props className : css를 커스터마이징 할 수 있도록 클래스명을 부여합니다.
//        id : 패널과 이벤트를 연동할 수 있도록 Item 컴포넌트에서 자동으로 id를 부여합니다.
//        idx : 다중 선택 옵셔널 값에 따라 활성화되는 인덱스를 기록하기 위해 Item 컴포넌트에서 자동으로 idx를 부여합니다.
const Trigger:React.FC<TriggerProps> = ({className, id, expanded, ariaControls, setExpanded, children}) => {

    const useTriggerHandler = () => {
      setExpanded && setExpanded(! expanded);
    }

    return (
      <button type="button"
              id={`${id}`}
              className={`accordion-btn${className ? ` ${className}` : ''}${expanded ? ' active' : ''}`}
              aria-expanded={expanded}
              aria-controls={`${ariaControls}`}
              onClick={ useTriggerHandler }>
        <strong className="accordion-btn__tit">
          { children }
        </strong>
      </button>
    )
}

export default Trigger;