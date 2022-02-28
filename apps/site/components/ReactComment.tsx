import React, {useEffect, useRef} from 'react';

const ReactComment = ( props ) => {
    const el = useRef<HTMLDivElement>();
    useEffect( () => {
        if (el?.current) {
          el.current.outerHTML = `<!-- ${props.text} -->`;
        }
    }, [props.text] );
    return (
        <div ref={el}/>
    );
};

export default ReactComment;
