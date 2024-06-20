import React from 'react'
import ReactDOM from 'react-dom/client'
import { Accordion, Item, Trigger, Panel } from './lib/components/accordion';

ReactDOM.createRoot(document.getElementById('root')!).render (
  <React.StrictMode>
    <Accordion>
      <Item>
        <Trigger>트리거1</Trigger>
        <Panel>패널1</Panel>
      </Item>
      <Item>
        <Trigger>트리거2</Trigger>
        <Panel>패널2</Panel>
      </Item>
    </Accordion>
  </React.StrictMode>,
)