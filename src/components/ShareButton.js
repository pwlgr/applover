import React, { useRef, useState, useContext } from 'react';
import { Button } from 'semantic-ui-react'
import { ConfigurationContext } from '../contexts/ConfigurationContext'

const ShareButton = () => {
  const [state] = useContext(ConfigurationContext)
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
      textAreaRef.current.select();
      document.execCommand('copy');
      e.target.focus();
      setCopySuccess('Copied!');
  };

  return (
      <div>
    {document.queryCommandSupported('copy') &&
      <div>
        <Button onClick={copyToClipboard}>Copy</Button> 
        {copySuccess}
      </div>}
    <form>
      <textarea
        onChange={() => {}}
        style={{height: '100px'}}
        ref={textAreaRef}
        value={JSON.stringify(state)}
      />
    </form>
  </div>
  );
}

export default ShareButton;