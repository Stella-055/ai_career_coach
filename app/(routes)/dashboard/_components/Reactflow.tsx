import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 

export default function Reactflow() {
    const initialNodes = [
        { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
        { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
      ];
      const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];
       
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        
        fitView
      />
    </div>
  );
}