import React, { useState } from 'react';
import DashboardShareUrlStyled from './styles';
import Title from '../Title';
import SelectInputCoffeeStore from '../SelectInputCoffeeStore';
import { AiOutlineCopy } from 'react-icons/ai';
import { HiLightBulb } from 'react-icons/hi';
import CopyNotification from '../CopyNotification';

const DashboardShareUrl = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [url, setUrl] = useState('http://localhost:3000/hippo-coffee');
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = (e) => {
    setIsHovered(false);
  };

  const handleClickCopy = () => {
    const copyText = document.querySelector('.url-generated');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    setIsHovered(false);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <DashboardShareUrlStyled>
      <Title content="Share" />
      <div className="share-url-area">
        <p>Coffee Store:</p>
        <SelectInputCoffeeStore
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
        <button
          className={
            isSelected ? 'generate-btn-available' : 'generate-btn-disabled'
          }
          disabled={!isSelected}
        >
          Generate
        </button>

        <p>URL:</p>
        <input
          type="text"
          className="url-generated"
          value={url}
          onChange={handleChange}
          disabled
        />
        <AiOutlineCopy
          className="copy-url-icon"
          onClick={handleClickCopy}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        {isCopied ? <CopyNotification content="Copied to Clipboard!" /> : null}
        {isHovered && !isCopied ? (
          <CopyNotification content="Copy to Clipboard!" />
        ) : null}
      </div>
      {url.length ? (
        <p className="generate-success-notification">
          <HiLightBulb />
          Great! Now you can share this coffee store by above URL to everyone!
        </p>
      ) : null}
    </DashboardShareUrlStyled>
  );
};

export default DashboardShareUrl;
