import React, { ReactNode, useEffect, useState } from 'react';
import Trigger from './../atoms/Trigger';
import Panel from './../atoms/Panel';
import getChildren from '../../../hooks/getChildren';
import addRandomKey from '../../../hooks/addRandomKey';

interface IItem {
  className?: string;
  expanded?: boolean;
  children: ReactNode;
}

// @name Item : 아코디언 요소
// @referance : https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
// @desc WAI-ARIA 1.2 기준에 맞춰 아코디언 요소 형식을 마크업하고 이벤트를 부여한다.
// @props className : css를 커스터마이징 할 수 있도록 클래스명을 부여합니다.
//        expanded : 아코디언 요소 확장 여부를 지정합니다. 기본 값은 false입니다.
const Item:React.FC<IItem> = ({className, expanded = false, children}) => {

    const [id] = useState<string>(addRandomKey('ariaAccordion')),
          [itemExpanded, setItemExpanded] = useState<boolean>(false);

    useEffect(() => {
      console.log(expanded);
      expanded && setItemExpanded(true);
    }, []);

    return (
        <li className={`aria-accordion-list__item${className ? ` ${className}` : ''}`}>
          {/* Trigger */}
          {
            getChildren(children, 'Trigger').map((item, idx) => {
                return (
                 <Trigger key={idx}
                          idx={idx}
                          id={id}
                          className={item.props.className}
                          expanded={itemExpanded}
                          setExpanded={setItemExpanded} >
                   { item.children }
                 </Trigger>
               )
            })
          }
          {/* Panel */}
          {
            getChildren(children, 'Panel').map((item, idx) => {
                return (
                 <Panel key={idx}
                        idx={idx}
                        id={id}
                        className={item.props.className}
                        expanded={itemExpanded} >
                   { item.children }
                 </Panel>
               )
            })
          }
        </li>
    )
}

export default Item;

