"use client"; // this is a client component 


import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'draft-js/dist/Draft.css';
import { EditorState } from 'draft-js';

const RichTextEditor = dynamic(() => import('@/app/components/richField/RichEditor'), { ssr: false });

function Demo() {
  
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [bodyValue, setBodyValue] = useState("");

  const handleEditorChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      {bodyValue}
      <RichTextEditor setBodyValue={setBodyValue} editorState={editorState} onChange={handleEditorChange} />
    </div>
  );
}

export default Demo;
