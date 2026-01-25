import { useMemo } from 'react';
import {
  ReactFlow,
  Background,
  type Node,
  type Edge,
  Handle,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

// ===========================================
// DESIGN SYSTEM - Easy to modify colors here
// ===========================================
export const diagramTheme = {
  // Node type colors (soft pastels with semantic meaning)
  nodeColors: {
    // Primary brand colors
    primary: { bg: '#E8F5F0', border: '#0D9373', text: '#0D9373', header: '#0D9373', icon: '✓' },
    secondary: { bg: '#EEF2FF', border: '#6366F1', text: '#4F46E5', header: '#6366F1', icon: '◆' },

    // Semantic colors
    success: { bg: '#DCFCE7', border: '#22C55E', text: '#15803D', header: '#22C55E', icon: '✓' },
    warning: { bg: '#FEF9C3', border: '#EAB308', text: '#A16207', header: '#CA8A04', icon: '⚠' },
    danger: { bg: '#FEE2E2', border: '#EF4444', text: '#DC2626', header: '#EF4444', icon: '✕' },
    info: { bg: '#DBEAFE', border: '#3B82F6', text: '#1D4ED8', header: '#3B82F6', icon: 'ℹ' },
    neutral: { bg: '#F8FAFC', border: '#CBD5E1', text: '#475569', header: '#64748B', icon: '○' },

    // Extended palette (softer pastels)
    purple: { bg: '#F3E8FF', border: '#A855F7', text: '#7C3AED', header: '#9333EA', icon: '◇' },
    pink: { bg: '#FCE7F3', border: '#EC4899', text: '#DB2777', header: '#DB2777', icon: '♦' },
    teal: { bg: '#CCFBF1', border: '#14B8A6', text: '#0D9488', header: '#0F766E', icon: '◈' },
    cyan: { bg: '#CFFAFE', border: '#06B6D4', text: '#0891B2', header: '#0891B2', icon: '◉' },
    amber: { bg: '#FEF3C7', border: '#F59E0B', text: '#B45309', header: '#D97706', icon: '★' },
    indigo: { bg: '#E0E7FF', border: '#6366F1', text: '#4338CA', header: '#4F46E5', icon: '◆' },
    rose: { bg: '#FFE4E6', border: '#F43F5E', text: '#E11D48', header: '#E11D48', icon: '♥' },
    sky: { bg: '#E0F2FE', border: '#0EA5E9', text: '#0369A1', header: '#0284C7', icon: '☁' },
    lime: { bg: '#ECFCCB', border: '#84CC16', text: '#4D7C0F', header: '#65A30D', icon: '●' },
    orange: { bg: '#FFEDD5', border: '#F97316', text: '#C2410C', header: '#EA580C', icon: '◐' },

    // Specific use cases
    trigger: { bg: '#FEF2F2', border: '#F87171', text: '#DC2626', header: '#EF4444', icon: '⚡' },
    action: { bg: '#EFF6FF', border: '#60A5FA', text: '#1D4ED8', header: '#3B82F6', icon: '▶' },
    condition: { bg: '#FAF5FF', border: '#C084FC', text: '#7C3AED', header: '#A855F7', icon: '⟡' },
    result: { bg: '#F0FDF4', border: '#4ADE80', text: '#15803D', header: '#22C55E', icon: '✓' },
    data: { bg: '#F8FAFC', border: '#94A3B8', text: '#475569', header: '#64748B', icon: '▣' },
    process: { bg: '#F0F9FF', border: '#38BDF8', text: '#0369A1', header: '#0EA5E9', icon: '⚙' },
    input: { bg: '#F5F5F4', border: '#A8A29E', text: '#57534E', header: '#78716C', icon: '→' },
    output: { bg: '#ECFDF5', border: '#34D399', text: '#047857', header: '#10B981', icon: '←' },
  },

  // Icons for common node types
  icons: {
    database: '🗄️',
    api: '🔌',
    file: '📄',
    user: '👤',
    system: '⚙️',
    check: '✓',
    cross: '✕',
    warning: '⚠️',
    info: 'ℹ️',
    arrow: '→',
    lightning: '⚡',
    chart: '📊',
    lock: '🔒',
    globe: '🌐',
    code: '💻',
    brain: '🧠',
    magic: '✨',
    search: '🔍',
    filter: '🔽',
    transform: '🔄',
    connect: '🔗',
    send: '📤',
    receive: '📥',
  },

  // Edge colors
  edge: {
    stroke: '#64748B',
    strokeWidth: 2,
    arrowColor: '#64748B',
  },

  // Background
  background: {
    color: '#FAFBFC',
    gap: 20,
    dotColor: '#E2E8F0',
  },

  // Container
  container: {
    border: '1px solid #E2E8F0',
    borderRadius: '16px',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)',
  },

  // Layout
  layout: {
    minHeight: '320px',
    defaultHeight: '400px',
    maxHeight: '600px',
    padding: 0.2,
  },
};

// Map color names to theme colors
function getNodeColorScheme(color?: string) {
  if (!color) return diagramTheme.nodeColors.primary;

  // Direct theme key lookup
  if (color in diagramTheme.nodeColors) {
    return diagramTheme.nodeColors[color as keyof typeof diagramTheme.nodeColors];
  }

  // Legacy hex color mapping
  const colorMap: Record<string, keyof typeof diagramTheme.nodeColors> = {
    '#0d9373': 'primary',
    '#07c983': 'success',
    '#3b82f6': 'info',
    '#6b7280': 'neutral',
    '#f59e0b': 'warning',
    '#ef4444': 'danger',
    '#8b5cf6': 'purple',
    '#ec4899': 'pink',
    '#14b8a6': 'teal',
  };

  const themeKey = colorMap[color.toLowerCase()];
  if (themeKey) return diagramTheme.nodeColors[themeKey];

  return diagramTheme.nodeColors.primary;
}

// ===========================================
// CUSTOM NODE COMPONENT - Modern Card Style
// ===========================================
interface CustomNodeData {
  label: string;
  color?: string;
  textColor?: string;
  icon?: string;
  tag?: string;
  description?: string;
}

function CustomNode({ data }: { data: CustomNodeData }) {
  const colorScheme = getNodeColorScheme(data.color);
  const lines = data.label.split('\n');
  const title = lines[0];
  const subtitle = lines.length > 1 ? lines.slice(1).join(' ') : data.description;
  const icon = data.icon || colorScheme.icon;

  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        border: `1.5px solid ${colorScheme.border}40`,
        minWidth: '140px',
        maxWidth: '200px',
        overflow: 'hidden',
      }}
    >
      {/* Colored header bar with icon */}
      <div
        style={{
          background: `linear-gradient(135deg, ${colorScheme.bg} 0%, ${colorScheme.bg}90 100%)`,
          borderBottom: `1px solid ${colorScheme.border}20`,
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {icon && (
          <span style={{ fontSize: '14px', flexShrink: 0 }}>
            {icon}
          </span>
        )}
        <span
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: colorScheme.text,
            flex: 1,
            lineHeight: 1.3,
          }}
        >
          {title}
        </span>
        {data.tag && (
          <span
            style={{
              fontSize: '9px',
              padding: '2px 6px',
              borderRadius: '6px',
              background: `${colorScheme.border}20`,
              color: colorScheme.text,
              fontWeight: 600,
              letterSpacing: '0.3px',
              flexShrink: 0,
            }}
          >
            {data.tag}
          </span>
        )}
      </div>

      {/* Content area */}
      {subtitle && (
        <div style={{ padding: '10px 14px' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: '#64748B',
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </div>
        </div>
      )}

      {/* Hidden handles for edge connections */}
      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
    </div>
  );
}

// ===========================================
// SIMPLE NODE - Compact single-line display
// ===========================================
function SimpleNode({ data }: { data: CustomNodeData }) {
  const colorScheme = getNodeColorScheme(data.color);
  const icon = data.icon || colorScheme.icon;

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colorScheme.bg} 0%, ${colorScheme.bg}80 100%)`,
        borderRadius: '10px',
        padding: '12px 16px',
        border: `1.5px solid ${colorScheme.border}30`,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
        minWidth: '100px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {icon && (
        <span style={{ fontSize: '16px', flexShrink: 0 }}>
          {icon}
        </span>
      )}
      <span
        style={{
          fontSize: '12px',
          fontWeight: 500,
          color: colorScheme.text,
          whiteSpace: 'pre-line',
          lineHeight: 1.4,
        }}
      >
        {data.label}
      </span>

      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
    </div>
  );
}

// ===========================================
// BADGE NODE - For status/result indicators
// ===========================================
function BadgeNode({ data }: { data: CustomNodeData }) {
  const colorScheme = getNodeColorScheme(data.color);
  const icon = data.icon || colorScheme.icon;

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${colorScheme.bg} 0%, #FFFFFF 100%)`,
        borderRadius: '24px',
        padding: '10px 18px',
        border: `2px solid ${colorScheme.border}50`,
        boxShadow: `0 2px 8px ${colorScheme.border}20`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {icon && (
        <span style={{ fontSize: '14px' }}>
          {icon}
        </span>
      )}
      <span
        style={{
          fontSize: '12px',
          fontWeight: 600,
          color: colorScheme.text,
          letterSpacing: '0.3px',
        }}
      >
        {data.label}
      </span>

      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
    </div>
  );
}

// ===========================================
// GROUP NODE - For grouping related items (like subnet boxes)
// ===========================================
function GroupNode({ data }: { data: CustomNodeData }) {
  const colorScheme = getNodeColorScheme(data.color);

  return (
    <div
      style={{
        background: `linear-gradient(180deg, ${colorScheme.bg}60 0%, ${colorScheme.bg}30 100%)`,
        borderRadius: '16px',
        padding: '44px 24px 24px',
        border: `2px dashed ${colorScheme.border}50`,
        minWidth: '220px',
        minHeight: '120px',
        position: 'relative',
      }}
    >
      {/* Group label */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '4px 10px',
          background: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        }}
      >
        {data.icon && (
          <span style={{ fontSize: '12px' }}>{data.icon}</span>
        )}
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: colorScheme.text,
            letterSpacing: '0.3px',
          }}
        >
          {data.label}
        </span>
      </div>
    </div>
  );
}

// ===========================================
// ICON NODE - Just an icon with optional label below
// ===========================================
function IconNode({ data }: { data: CustomNodeData }) {
  const colorScheme = getNodeColorScheme(data.color);
  const icon = data.icon || colorScheme.icon;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: `linear-gradient(135deg, ${colorScheme.bg} 0%, #FFFFFF 100%)`,
          border: `1.5px solid ${colorScheme.border}40`,
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '22px',
        }}
      >
        {icon}
      </div>
      {data.label && (
        <span
          style={{
            fontSize: '10px',
            fontWeight: 500,
            color: colorScheme.text,
            textAlign: 'center',
            maxWidth: '80px',
          }}
        >
          {data.label}
        </span>
      )}

      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Left} id="left" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Right} id="right" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
      <Handle type="target" position={Position.Bottom} id="bottom" style={{ opacity: 0, pointerEvents: 'none' }} />
    </div>
  );
}

// ===========================================
// NODE TYPES REGISTRY
// ===========================================
const nodeTypes = {
  custom: CustomNode,
  simple: SimpleNode,
  badge: BadgeNode,
  group: GroupNode,
  icon: IconNode,
  default: CustomNode,
};

// ===========================================
// AUTO LAYOUT - Custom Tree/Graph Layout
// ===========================================
type LayoutDirection = 'TB' | 'LR' | 'BT' | 'RL';

interface LayoutOptions {
  direction: LayoutDirection;
  nodeWidth: number;
  nodeHeight: number;
  rankSep: number; // Spacing between ranks (levels)
  nodeSep: number; // Spacing between nodes in same rank
}

const defaultLayoutOptions: LayoutOptions = {
  direction: 'LR',
  nodeWidth: 200,
  nodeHeight: 90,
  rankSep: 100,
  nodeSep: 40,
};

function getNodeSize(nodeType?: string): { width: number; height: number } {
  switch (nodeType) {
    case 'badge':
      return { width: 150, height: 50 };
    case 'icon':
      return { width: 80, height: 90 };
    case 'simple':
      return { width: 180, height: 65 };
    case 'group':
      return { width: 250, height: 150 };
    default:
      return { width: 200, height: 90 };
  }
}

function getLayoutedElements(
  nodes: Node[],
  edges: Edge[],
  options: Partial<LayoutOptions> = {}
): { nodes: Node[]; edges: Edge[] } {
  if (nodes.length === 0) return { nodes, edges };

  const opts = { ...defaultLayoutOptions, ...options };

  // Build adjacency lists
  const outgoing = new Map<string, string[]>();
  const incoming = new Map<string, string[]>();
  const nodeMap = new Map<string, Node>();

  nodes.forEach((node) => {
    outgoing.set(node.id, []);
    incoming.set(node.id, []);
    nodeMap.set(node.id, node);
  });

  edges.forEach((edge) => {
    outgoing.get(edge.source)?.push(edge.target);
    incoming.get(edge.target)?.push(edge.source);
  });

  // Find root nodes (nodes with no incoming edges)
  const roots = nodes.filter((n) => (incoming.get(n.id)?.length || 0) === 0);

  // If no roots found (cyclic graph), use first node
  if (roots.length === 0 && nodes.length > 0) {
    roots.push(nodes[0]);
  }

  // Assign levels using BFS
  const levels = new Map<string, number>();
  const visited = new Set<string>();
  const queue: { id: string; level: number }[] = [];

  roots.forEach((root) => {
    queue.push({ id: root.id, level: 0 });
  });

  while (queue.length > 0) {
    const { id, level } = queue.shift()!;

    if (visited.has(id)) {
      // Update to max level if already visited
      const currentLevel = levels.get(id) || 0;
      if (level > currentLevel) {
        levels.set(id, level);
      }
      continue;
    }

    visited.add(id);
    levels.set(id, level);

    const children = outgoing.get(id) || [];
    children.forEach((childId) => {
      queue.push({ id: childId, level: level + 1 });
    });
  }

  // Handle disconnected nodes
  nodes.forEach((node) => {
    if (!levels.has(node.id)) {
      levels.set(node.id, 0);
    }
  });

  // Group nodes by level
  const levelGroups = new Map<number, Node[]>();
  nodes.forEach((node) => {
    const level = levels.get(node.id) || 0;
    if (!levelGroups.has(level)) {
      levelGroups.set(level, []);
    }
    levelGroups.get(level)!.push(node);
  });

  // Sort levels
  const sortedLevels = Array.from(levelGroups.keys()).sort((a, b) => a - b);

  // Calculate positions
  const layoutedNodes = nodes.map((node) => {
    const level = levels.get(node.id) || 0;
    const nodesInLevel = levelGroups.get(level) || [];
    const indexInLevel = nodesInLevel.indexOf(node);
    const levelCount = nodesInLevel.length;
    const { width, height } = getNodeSize(node.type);

    // Calculate position based on direction
    let x: number, y: number;
    const isHorizontal = opts.direction === 'LR' || opts.direction === 'RL';

    if (isHorizontal) {
      // Horizontal layout (LR or RL)
      const levelWidth = width + opts.rankSep;
      const totalHeight = levelCount * (height + opts.nodeSep) - opts.nodeSep;
      const startY = -totalHeight / 2;

      x = opts.direction === 'LR'
        ? level * levelWidth
        : (sortedLevels.length - 1 - level) * levelWidth;
      y = startY + indexInLevel * (height + opts.nodeSep);
    } else {
      // Vertical layout (TB or BT)
      const levelHeight = height + opts.rankSep;
      const totalWidth = levelCount * (width + opts.nodeSep) - opts.nodeSep;
      const startX = -totalWidth / 2;

      x = startX + indexInLevel * (width + opts.nodeSep);
      y = opts.direction === 'TB'
        ? level * levelHeight
        : (sortedLevels.length - 1 - level) * levelHeight;
    }

    return {
      ...node,
      position: { x, y },
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ===========================================
// EDGE STYLING
// ===========================================
function styleEdges(edges: Edge[], _direction: LayoutDirection): Edge[] {
  console.log('Styling edges:', edges.length);
  return edges.map(edge => {
    console.log('Edge:', edge.id, edge.source, '->', edge.target);
    return {
      ...edge,
      style: {
        strokeWidth: 3,
        stroke: '#ef4444',
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 24,
        height: 24,
        color: '#ef4444',
      },
    };
  });
}

// ===========================================
// MAIN FLOW DIAGRAM COMPONENT
// ===========================================
interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
  height?: string;
  minHeight?: string;
  variant?: 'default' | 'compact' | 'badge';
  fitView?: boolean;
  padding?: number;
  // Auto layout options
  autoLayout?: boolean;
  direction?: LayoutDirection;
  rankSep?: number;
  nodeSep?: number;
}

export default function FlowDiagram({
  nodes: initialNodes,
  edges: initialEdges,
  height,
  minHeight = diagramTheme.layout.minHeight,
  variant = 'default',
  fitView = true,
  padding = diagramTheme.layout.padding,
  autoLayout = true,
  direction = 'LR',
  rankSep = 80,
  nodeSep = 50,
}: FlowDiagramProps) {
  // Calculate dynamic height based on node layout if not specified
  const computedHeight = height || diagramTheme.layout.defaultHeight;

  // Process nodes to apply variant styling
  const processedNodes = useMemo(() => {
    return initialNodes.map(node => {
      let nodeType = node.type || 'custom';

      // Only override type if using variant mode (not for explicitly set types)
      if (variant === 'compact' && node.type === 'custom') nodeType = 'simple';
      else if (variant === 'badge' && node.type === 'custom') nodeType = 'badge';

      return {
        ...node,
        type: nodeType,
      };
    });
  }, [initialNodes, variant]);

  // Apply auto layout if enabled
  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(() => {
    if (autoLayout) {
      return getLayoutedElements(processedNodes, initialEdges, {
        direction,
        rankSep,
        nodeSep,
      });
    }
    return { nodes: processedNodes, edges: initialEdges };
  }, [processedNodes, initialEdges, autoLayout, direction, rankSep, nodeSep]);

  const styledEdges = styleEdges(layoutedEdges, direction);

  return (
    <div
      style={{
        width: '100%',
        height: computedHeight,
        minHeight,
        ...diagramTheme.container,
        overflow: 'hidden',
      }}
    >
      <ReactFlow
        nodes={layoutedNodes}
        edges={styledEdges}
        nodeTypes={nodeTypes}
        fitView={fitView}
        fitViewOptions={{ padding }}
        defaultEdgeOptions={{
          type: 'smoothstep',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: diagramTheme.edge.stroke,
          },
          style: {
            strokeWidth: diagramTheme.edge.strokeWidth,
            stroke: diagramTheme.edge.stroke,
          },
        }}
        // INTERACTIVE - panning and zooming enabled
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        zoomOnDoubleClick={true}
        nodesDraggable={true}
        nodesConnectable={false}
        nodesFocusable={true}
        edgesFocusable={true}
        elementsSelectable={true}
        preventScrolling={true}
        // Hide attribution
        proOptions={{ hideAttribution: true }}
      >
        <Background
          color={diagramTheme.background.dotColor}
          gap={diagramTheme.background.gap}
          style={{ background: diagramTheme.background.color }}
        />
      </ReactFlow>
    </div>
  );
}

// ===========================================
// EXPORTS
// ===========================================
export { diagramTheme as theme };
export type { CustomNodeData };
