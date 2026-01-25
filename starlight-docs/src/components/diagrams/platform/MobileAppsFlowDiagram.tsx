import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'data', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Your Data Model\nEnterprise sources', color: 'neutral', icon: '🗄️', tag: 'Source' } },
  { id: 'analysis', type: 'custom', position: { x: 240, y: 100 }, data: { label: 'Superatom Analysis\nProcess & understand', color: 'info', icon: '🧠' } },
  { id: 'ios', type: 'custom', position: { x: 480, y: 20 }, data: { label: 'iOS App\nAuto-generated', color: 'primary', icon: '📱' } },
  { id: 'android', type: 'custom', position: { x: 480, y: 180 }, data: { label: 'Android App\nAuto-generated', color: 'primary', icon: '📱' } },
  { id: 'users', type: 'badge', position: { x: 720, y: 100 }, data: { label: 'Field Workers', color: 'success', icon: '👷' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'data', target: 'analysis' },
  { id: 'e2', source: 'analysis', target: 'ios' },
  { id: 'e3', source: 'analysis', target: 'android' },
  { id: 'e4', source: 'ios', target: 'users' },
  { id: 'e5', source: 'android', target: 'users' },
];

export default function MobileAppsFlowDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="340px" />;
}
