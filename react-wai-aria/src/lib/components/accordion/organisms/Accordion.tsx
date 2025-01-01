import React, { ReactNode } from 'react';
import getChildren from '../../../hooks/getChildren';
import Item from '../molecules/Item';

interface AccordionProps {
  className?: string;
  children : ReactNode;
}

// @name Accordion : 아코디언 그룹
// @referance : https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
// @desc WAI-ARIA 1.2 기준에 맞춰 아코디언 형식을 마크업하고 이벤트를 부여한다.
// @props className : css를 커스터마이징 할 수 있도록 클래스명을 부여합니다.
const Accordion:React.FC<AccordionProps> = ({className, children}) => {

  return (
    <div className={`accordion${className ? ` ${className}` : ''}`}>
      <ul className="accordion-list">
          {
            getChildren(children, 'Item').map((item, idx) => {
              return (
                <Item key={idx}
                      className={item.props.className}
                      expanded={item.props.expanded}>
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