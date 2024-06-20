import React, { ReactNode, useState } from 'react';
import getChildren from '../../../hooks/getChildren';
import Item from '../molecules/Item';

interface IAccordion {
  className?: string;
  multiple?: boolean;
  children : ReactNode;
}

// @name Accordion : 아코디언 그룹
// @referance : https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
// @desc WAI-ARIA 1.2 기준에 맞춰 아코디언 형식을 마크업하고 이벤트를 부여한다.
// @props className : css를 커스터마이징 할 수 있도록 클래스명을 부여합니다.
//        multiple : 다중 확장 가능 여부를 지정합니다. 기본 값은 false 입니다.
const Accordion:React.FC<IAccordion> = ({className, multiple = false, children}) => {

  const [expanded] = useState<number>(0);

  return (
    <div className={`aria-accordion${className ? ` ${className}` : ''}`}>
      <ul className="aria-accordion-list">
          {
            getChildren(children, 'Item').map((item, idx) => {
              return (
                <Item key={idx}
                      expanded={ (multiple) ? 
                                  item.props.expanded : 
                                    (expanded === idx) ? true : 
                                  item.props.expanded }>
                  { item.children }
                </Item>
              )
            })
          }
      </ul>
    </div>
  )
}

export default Accordion;