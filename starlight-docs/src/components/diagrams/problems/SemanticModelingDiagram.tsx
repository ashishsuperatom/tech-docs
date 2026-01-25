import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Data Sources
  { id: 's1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'ERP Systems\nSAP, Oracle, etc.', color: 'neutral', icon: '🏢' } },
  { id: 's2', type: 'custom', position: { x: 0, y: 120 }, data: { label: 'Databases\nSQL, NoSQL stores', color: 'neutral', icon: '🗄️' } },
  { id: 's3', type: 'custom', position: { x: 0, y: 240 }, data: { label: 'File Systems\nCSV, Excel, JSON', color: 'neutral', icon: '📁' } },
  { id: 's4', type: 'custom', position: { x: 0, y: 360 }, data: { label: 'APIs\nREST, GraphQL', color: 'neutral', icon: '🔌' } },

  // Analysis Steps
  { id: 'a1', type: 'custom', position: { x: 240, y: 60 }, data: { label: 'Schema Analysis\nTable/column names, relationships', color: 'info', icon: '🔍', tag: 'Step 1' } },
  { id: 'a2', type: 'custom', position: { x: 240, y: 200 }, data: { label: 'Statistical Profiling\nDistinct values, distributions', color: 'info', icon: '📊', tag: 'Step 2' } },
  { id: 'a3', type: 'custom', position: { x: 500, y: 60 }, data: { label: 'Domain Classification\nSupply chain? Retail? Finance?', color: 'purple', icon: '🏷️', tag: 'Step 3' } },
  { id: 'a4', type: 'custom', position: { x: 500, y: 200 }, data: { label: 'Query Generation\nCommon questions for this data', color: 'purple', icon: '💬', tag: 'Step 4' } },

  // Output
  { id: 'o1', type: 'badge', position: { x: 760, y: 130 }, data: { label: 'Semantic Model', color: 'primary', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 's1', target: 'a1' },
  { id: 'e2', source: 's2', target: 'a1' },
  { id: 'e3', source: 's3', target: 'a2' },
  { id: 'e4', source: 's4', target: 'a2' },
  { id: 'e5', source: 'a1', target: 'a3' },
  { id: 'e6', source: 'a2', target: 'a4' },
  { id: 'e7', source: 'a3', target: 'o1' },
  { id: 'e8', source: 'a4', target: 'o1' },
];

export default function SemanticModelingDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="520px" />;
}
