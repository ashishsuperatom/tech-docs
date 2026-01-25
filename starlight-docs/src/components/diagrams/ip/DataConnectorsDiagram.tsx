import FlowDiagram from '../FlowDiagram';
import type { Node, Edge } from '@xyflow/react';

const nodes: Node[] = [
  { id: 'c1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'JDBC Databases\nPostgres, MySQL, SQL Server', color: 'neutral', icon: '🗄️' } },
  { id: 'c2', type: 'custom', position: { x: 0, y: 100 }, data: { label: 'Cloud Warehouses\nBigQuery, Snowflake, Databricks', color: 'neutral', icon: '☁️' } },
  { id: 'c3', type: 'custom', position: { x: 0, y: 200 }, data: { label: 'ERP Systems\nSAP, Oracle, Dynamics', color: 'neutral', icon: '🏢' } },
  { id: 'c4', type: 'custom', position: { x: 0, y: 300 }, data: { label: 'Object Storage\nS3, GCS, Azure Blob', color: 'neutral', icon: '📦' } },
  { id: 'c5', type: 'custom', position: { x: 0, y: 400 }, data: { label: 'APIs\nREST, GraphQL', color: 'neutral', icon: '🔌' } },

  { id: 'ua', type: 'custom', position: { x: 280, y: 200 }, data: { label: 'Universal Interface\nStandardized data access', color: 'info', icon: '🔄' } },
  { id: 'analysis', type: 'badge', position: { x: 520, y: 200 }, data: { label: 'Analysis Pipeline', color: 'primary', icon: '🧠' } },
];

const edges: Edge[] = [
  { id: 'e1', source: 'c1', target: 'ua' },
  { id: 'e2', source: 'c2', target: 'ua' },
  { id: 'e3', source: 'c3', target: 'ua' },
  { id: 'e4', source: 'c4', target: 'ua' },
  { id: 'e5', source: 'c5', target: 'ua' },
  { id: 'e6', source: 'ua', target: 'analysis' },
];

export default function DataConnectorsDiagram() {
  return <FlowDiagram nodes={nodes} edges={edges} height="580px" />;
}
