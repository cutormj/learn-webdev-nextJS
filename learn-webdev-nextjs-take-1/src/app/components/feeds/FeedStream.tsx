'use client';

import React, { useState } from 'react';
import PostFeed from './PostFeed';
import TestFeed from './TestFeed';

// Define the type for a node in the component tree
type Node = {
  name: string;
  type: string;
  props?: any;
  nodes?: Node[];
};

// Map component type to the actual component
const componentMap: { [key: string]: React.FC<any> } = {
  PostFeed,
  TestFeed,
};

// Example JSON data
const componentData: Node[] = [
  {
    name: 'Post 1',
    type: 'PostFeed',
    props: {
      id: 2,
      user: "User Name Test",
      time: "Today",
      postContent: "Hello there",
    },
    nodes: [
      {
        name: 'Nested Post 1.1',
        type: 'PostFeed',
        props: {
          id: 3,
          user: "Nested User",
          time: "Now",
          postContent: "Nested content",
        },
        nodes: [
          {
            name: 'Nested Post 1.1',
            type: 'PostFeed',
            props: {
              id: 3,
              user: "Nested User",
              time: "Now",
              postContent: "Nested content",
            },
          },

          {
            name: 'Test Feed 1',
            type: 'TestFeed',
            props: {
              id: 4,
              quote: "This is a quote sampel text",
            }
          },

        ],


      },
    ],
  },
];

// Recursive component to render the component tree
export function ComponentStreamSysteam({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);

  const Component = componentMap[node.type];

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

        <code className={`size-6 text-sky-500 ${node.nodes && node.nodes.length === 0 ? 'ml-[22px]' : ''}`} >F</code>
        {node.name}
      </span>

      <div>
        {Component && <Component {...node.props} />}
      </div>

      {isOpen && node.nodes && (
        <ul className="pl-6">
          {node.nodes.map((childNode) => (
            <ComponentStreamSysteam node={childNode} key={childNode.name} />
          ))}
        </ul>
      )}
    </li>
  );
}

// Top-level component to render the initial component tree
const FeedStream: React.FC = () => {
  return (
    <ul>
      {componentData.map((node) => (
        <ComponentStreamSysteam node={node} key={node.name} />
      ))}
    </ul>
  );
};

export default FeedStream;
