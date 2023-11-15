import { Modal } from 'antd';
import ConfirmModalStyled from '@/components/Dashboard/common/ConfirmModal/styles';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

const ConfirmModal = ({
  setIsModalOpen,
  title,
  content,
  okText,
  isModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ConfirmModalStyled>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={okText}
      >
        <p>{content}</p>
        <BsFillExclamationCircleFill className="exclamation-icon" />
      </Modal>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
