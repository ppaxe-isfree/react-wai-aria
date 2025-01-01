import React, { ReactNode, useEffect, useState } from 'react';
import Trigger from './../atoms/Trigger';
import Panel from './../atoms/Panel';
import getChildren from '../../../hooks/getChildren';
import addRandomKey from '../../../hooks/addRandomKey';

interface ItemProps {
  className?: string;
  expanded?: boolean;
  children: ReactNode;
}

// @name Item : 아코디언 요소
// @referance : https://www.w3.org/WAI/ARIA/apg/patterns/accordion/
// @desc WAI-ARIA 1.2 기준에 맞춰 아코디언 요소 형식을 마크업하고 이벤트를 부여한다.
// @props className : css를 커스터마이징 할 수 있도록 클래스명을 부여합니다.
//        expanded : 아코디언 요소 확장 여부를 지정합니다. 기본 값은 false입니다.
const Item:React.FC<ItemProps> = ({className, expanded = false, children}) => {

    const [triggerId] = useState<string>(addRandomKey()),
          [panelId] = useState<string>(addRandomKey()),
          [itemExpanded, setItemExpanded] = useState<boolean>(false);

    useEffect(() => {
      expanded && setItemExpanded(true);
    }, []);

    return (
        <li className={`accordion-list__item${className ? ` ${className}` : ''}`}>
          {/* Trigger */}
          {
            getChildren(children, 'Trigger').map((item, idx) => {
                return (
                 <Trigger key={idx}
                          id={triggerId}
                          className={item.props.className}
                          ariaControls={panelId}
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
                        id={panelId}
                        className={item.props.className}
                        ariaLabelledby={triggerId}
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

