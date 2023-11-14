import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

const ConfirmModal = ({ setIsModalOpen, title, content, okText }) => {
  const { confirm } = Modal;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  confirm({
    title: title,
    icon: <ExclamationCircleFilled />,
    content: content,
    onOk() {
      handleOk();
    },
    onCancel() {
      handleCancel();
    },
    okText: okText,
  });
};

export default ConfirmModal;
