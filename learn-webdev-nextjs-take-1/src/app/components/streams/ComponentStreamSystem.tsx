// filesystem-item.tsx
'use client';

import { useState } from 'react';

type Node = {
  name: string;
  nodes?: Node[];
};

export function ComponentStreamSysteam({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
            <code
              className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
            >=</code>
          </button>
        )}

        {node.nodes ? (
          <code className={`size-6 text-sky-500 ${node.nodes.length === 0 ? 'ml-[22px]' : ''}`} >F</code>
        ) : (
          <code className="ml-[22px] size-6 text-gray-900" >D</code>
        )}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <ComponentStreamSysteam node={node} key={node.name} />
          ))}
        </ul>
      )}
    </li>
  );
}
