import { Modal } from 'antd';
import ConfirmModalStyled from '@/components/Dashboard/common/ConfirmModal/styles';

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
      </Modal>
    </ConfirmModalStyled>
  );
};

export default ConfirmModal;
