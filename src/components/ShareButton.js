import React, { useRef, useState } from 'react';
import { Button } from 'semantic-ui-react'

const ShareButton = ({ state }) => {

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
      {
       /* Logical shortcut for only displaying the 
          button if the copy command exists */
       document.queryCommandSupported('copy') &&
        <div>
          <Button onClick={copyToClipboard}>Copy</Button> 
          {copySuccess}
        </div>
      }
      <form>
        <textarea
            style={{height: '100px'}}
          ref={textAreaRef}
          value={JSON.stringify(state)}
        />
      </form>
    </div>
  );
}

export default ShareButton;