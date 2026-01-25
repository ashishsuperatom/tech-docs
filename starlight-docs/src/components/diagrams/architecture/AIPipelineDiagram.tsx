import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'input', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'User Question\nNatural language input', color: 'neutral', icon: '💬', tag: 'Input' } },
  { id: 'classify', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Intent Classification\nDetect query type', color: 'info', icon: '🎯' } },
  { id: 'context', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Context Enrichment\nApply tribal knowledge', color: 'purple', icon: '🧠' } },
  { id: 'generate', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Query Generation\nCreate SQL/analysis', color: 'info', icon: '⚙️' } },
  { id: 'execute', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Execution\nRun against database', color: 'primary', icon: '▶️' } },
  { id: 'analyze', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Result Analysis\nInterpret data', color: 'primary', icon: '📊' } },
  { id: 'visualize', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Visualization\nSelect component', color: 'primary', icon: '📈' } },
  { id: 'output', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Streamed Response', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'input', target: 'classify' },
  { id: 'e2', source: 'classify', target: 'context' },
  { id: 'e3', source: 'context', target: 'generate' },
  { id: 'e4', source: 'generate', target: 'execute' },
  { id: 'e5', source: 'execute', target: 'analyze' },
  { id: 'e6', source: 'analyze', target: 'visualize' },
  { id: 'e7', source: 'visualize', target: 'output' },
];

export default function AIPipelineDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="320px" direction="LR" />;
}
