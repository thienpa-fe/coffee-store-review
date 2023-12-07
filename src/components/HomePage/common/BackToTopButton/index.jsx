import { Button } from 'antd';
import { BiSolidToTop } from 'react-icons/bi';
import BackToTopButtonStyled from '@/components/HomePage/common/BackToTopButton/styles';
import { useEffect } from 'react';

const BackToTopButton = () => {
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top-btn');
    const footer = document.getElementById('footer');
    const btnMarginBottom = parseInt(
      window.getComputedStyle(backToTopButton).getPropertyValue('bottom'),
    );

    console.log(footer);

    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }

      const footStartPos = footer?.getBoundingClientRect().y;

      if (window.innerHeight > footStartPos) {
        backToTopButton.style.bottom = `${
          window.innerHeight - footStartPos + btnMarginBottom
        }px`;
      } else {
        backToTopButton.style.bottom = '';
      }
    };

    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BackToTopButtonStyled>
      <Button
        type="primary"
        shape="circle"
        icon={<BiSolidToTop />}
        onClick={handleClick}
        id="back-to-top-btn"
        className="back-to-top-btn"
      />
    </BackToTopButtonStyled>
  );
};

export default BackToTopButton;
