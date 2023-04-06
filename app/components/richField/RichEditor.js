"use client"; // this is a client component

import React from 'react';
import { useRef } from 'react';
import { stateToHTML } from 'draft-js-export-html';

import './richText.css'


import { Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";


function RichTextEditor(props) {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());

  function focusEditor() {
    editorRef.current.focus();
  }

  function handleChange(newState) {
    setEditorState(newState);
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    props.setwidgetBody(html);
    const content = JSON.stringify(editorState.getCurrentContent());
    //props.setwidgetBody(content);
    props.setWidgetBodyReady(true)
    //console.log(content);
  }

  function handleKeyCommand(command, state) {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      handleChange(newState);
      return true;
    }
    return false;
  }

  function mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        editorState,
        4, /* maxDepth */
      );
      if (newEditorState !== editorState) {
        handleChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  function toggleBlockType(blockType) {
    handleChange(
      RichUtils.toggleBlockType(
        editorState,
        blockType
      )
    );
  }

  function toggleInlineStyle(inlineStyle) {
    handleChange(
      RichUtils.toggleInlineStyle(
        editorState,
        inlineStyle
      )
    );
  }

  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = 'RichEditor-editor';
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className="RichEditor-root">
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className} onClick={focusEditor}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleChange}
          placeholder="Widget Body"
          ref={editorRef}
          spellCheck={true}
        />
      </div>
    </div>
  );
}


  // Custom overrides for "code" style.
  const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };

  function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  }

  class StyleButton extends React.Component {
    constructor() {
      super();
      this.onToggle = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
      };
    }

    render() {
      let className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return (
        <span className={className} onMouseDown={this.onToggle}>
          {this.props.label}
        </span>
      );
    }
  }

  const BLOCK_TYPES = [
    {label: 'Code Block', style: 'code-block'},
  ];

  const BlockStyleControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return (
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type) =>
          <StyleButton
            key={type.label}
            active={type.style === blockType}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  var INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'},
  ];

  const InlineStyleControls = (props) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    
    return (
      <div className="RichEditor-controls">
        {INLINE_STYLES.map((type) =>
          <StyleButton
            key={type.label}
            active={currentStyle.has(type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
          />
        )}
      </div>
    );
  };

  export default RichTextEditor;