import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Controls, MiniMap, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TurboNode from './TurboNode';
 
const nodeTypes={
    turbo:TurboNode
}
interface initialNodesProps{
    id:string;
    position:{
        x:number;
        y:number
    };
    data:{
        label:string
    }
}
interface initialEdgesProps{
    id:string;
    source:string;
    target:string
}

   
export default function Reactflow({initalNodes,initalEdges}:{initalNodes:initialNodesProps[],initalEdges:initialEdgesProps[]}) {
   
       
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={initalNodes}
        edges={initalEdges}
        nodeTypes={nodeTypes}
        fitView>
             <Controls/>
             <MiniMap/>
            { /*@ts-ignore*/}
             <Background variant='dots' gap={12} size={1}/>
        </ReactFlow>
    </div>
  );
}