import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'q', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Complex Question\nWhy did margins drop?', color: 'neutral', icon: '❓', tag: 'Input' } },
  { id: 'agent', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Superatom Agent\nEnterprise AI', color: 'primary', icon: '🤖' } },

  // Context Layer
  { id: 'sm', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Semantic Model\nData relationships', color: 'info', icon: '🗂️', tag: 'Context' } },
  { id: 'tk', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Tribal Knowledge\nOrg-specific rules', color: 'purple', icon: '🧠' } },
  { id: 'hist', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'Query History\nPrior analysis', color: 'neutral', icon: '📜' } },

  // Execution Loop
  { id: 'plan', type: 'custom', position: { x: 0, y: 0 }, data: { label: '1. Plan Analysis\nBreak into sub-tasks', color: 'primary', icon: '📋', tag: 'Execute' } },
  { id: 'code', type: 'custom', position: { x: 0, y: 0 }, data: { label: '2. Generate SQL\nWrite queries', color: 'primary', icon: '💻' } },
  { id: 'exec', type: 'custom', position: { x: 0, y: 0 }, data: { label: '3. Execute\nRun against DB', color: 'primary', icon: '▶️' } },
  { id: 'analyze', type: 'custom', position: { x: 0, y: 0 }, data: { label: '4. Analyze\nInterpret results', color: 'primary', icon: '🔍' } },

  { id: 'result', type: 'badge', position: { x: 0, y: 0 }, data: { label: 'Root Cause Analysis', color: 'success', icon: '✓' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'q', target: 'agent' },
  { id: 'e2', source: 'agent', target: 'sm' },
  { id: 'e3', source: 'agent', target: 'tk' },
  { id: 'e4', source: 'agent', target: 'hist' },
  { id: 'e5', source: 'sm', target: 'plan' },
  { id: 'e6', source: 'tk', target: 'plan' },
  { id: 'e7', source: 'plan', target: 'code' },
  { id: 'e8', source: 'code', target: 'exec' },
  { id: 'e9', source: 'exec', target: 'analyze' },
  { id: 'e10', source: 'analyze', target: 'result' },
];

export default function CodingAgentFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="500px" direction="LR" />;
}
