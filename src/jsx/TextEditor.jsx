import {$getRoot, $getSelection} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import HtmlPlugin from './HTMLPlugin.tsx';

import {$generateHtmlFromNodes} from '@lexical/html';

import '../css/general.css'
import { useContext } from 'react';

const theme = {
  // Theme styling goes here
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
  console.error(error);
}

// When the editor changes, you can get notified via the
// LexicalOnChangePlugin!

export default function Editor({initialState, updateCallback}) {
  const initialConfig = {
    namespace: 'MyEditor', 
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin
            contentEditable={<ContentEditable className='editor'/>}
            ErrorBoundary={LexicalErrorBoundary}
        />
        <HtmlPlugin
            onHtmlChanged={(html) => updateCallback(html)}
            initialHtml={initialState}
        />
        <HistoryPlugin />
    </LexicalComposer>
  );
}