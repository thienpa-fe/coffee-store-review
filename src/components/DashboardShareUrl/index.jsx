import React, { useState } from 'react';
import DashboardShareUrlStyled from './styles';
import Title from '../Title';
import SelectInputCoffeeStore from '../SelectInputCoffeeStore';
import { AiOutlineCopy } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiLightBulb } from 'react-icons/hi';

const DashboardShareUrl = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [url, setUrl] = useState('http://localhost:3000/hippo-coffee');

  const handleChange = (e) => {
    setUrl(e.target.value);
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
          disabled="disabled"
        />
        <CopyToClipboard text={url}>
          <AiOutlineCopy className="copy-url-icon" />
        </CopyToClipboard>
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
