import React, { ReactNode } from "react";

// @name getChildren
// @desc 특정 개체에 대해 props 중 children 항목과 props 항목을 분리하여 추출한다.
// @example getChildren(children, 'Accordion');
// @return result<Array> : 특정 개체에 대한 props와 children
const getChildren = (child: ReactNode, key: string) => {

    const result = [];

    if(child) {
        if(Array.isArray(child)) {
            
            child.filter(item => item.type.name === key).map(item => {
                
                const { children, ...props } = item.props,
                          temp = { 
                          children : children,
                          props : props
                      }

                result.push(temp);
            })
        } else {

            if (React.isValidElement(child) && typeof child.type === 'function' && child.type.name === key) {

                const { children, ...props } = child.props,
                        temp = {
                            children : children,
                            props : props
                        }

                result.push(temp);
            }

        }
    }

    return result;
}

export default getChildren;