import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  // Data Sources
  { id: 's1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'ERP Systems\nSAP, Oracle, Dynamics', color: 'neutral', icon: '🏢' } },
  { id: 's2', type: 'custom', position: { x: 0, y: 110 }, data: { label: 'Databases\nPostgres, MySQL', color: 'neutral', icon: '🗄️' } },
  { id: 's3', type: 'custom', position: { x: 0, y: 220 }, data: { label: 'Data Warehouses\nSnowflake, BigQuery', color: 'neutral', icon: '🏛️' } },
  { id: 's4', type: 'custom', position: { x: 0, y: 330 }, data: { label: 'Files & APIs\nCSV, Excel, REST', color: 'neutral', icon: '📁' } },

  // Analysis Pipeline
  { id: 'a1', type: 'custom', position: { x: 260, y: 55 }, data: { label: 'Schema Analysis\nStructure & relationships', color: 'info', icon: '🔍', tag: 'Stage 1' } },
  { id: 'a2', type: 'custom', position: { x: 260, y: 185 }, data: { label: 'Sample Extraction\nRepresentative data', color: 'info', icon: '📋', tag: 'Stage 2' } },
  { id: 'a3', type: 'custom', position: { x: 520, y: 55 }, data: { label: 'Statistical Profiling\nPatterns & distributions', color: 'purple', icon: '📊', tag: 'Stage 3' } },
  { id: 'a4', type: 'custom', position: { x: 520, y: 185 }, data: { label: 'Domain Classification\nBusiness context', color: 'purple', icon: '🏷️', tag: 'Stage 4' } },
  { id: 'a5', type: 'custom', position: { x: 520, y: 315 }, data: { label: 'Query Generation\nPossible questions', color: 'purple', icon: '💬', tag: 'Stage 5' } },

  // Output
  { id: 'o1', type: 'badge', position: { x: 780, y: 185 }, data: { label: 'Semantic Model', color: 'primary', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 's1', target: 'a1' },
  { id: 'e2', source: 's2', target: 'a1' },
  { id: 'e3', source: 's3', target: 'a2' },
  { id: 'e4', source: 's4', target: 'a2' },
  { id: 'e6', source: 'a1', target: 'a3' },
  { id: 'e7', source: 'a2', target: 'a4' },
  { id: 'e8', source: 'a3', target: 'a4' },
  { id: 'e9', source: 'a4', target: 'a5' },
  { id: 'e10', source: 'a5', target: 'o1' },
  { id: 'e11', source: 'a3', target: 'o1' },
];

export default function SemanticPipelineDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="480px" />;
}
