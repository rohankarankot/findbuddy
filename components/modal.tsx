import React from "react";
import Modal from "react-native-modal";

const ModalComponent = ({ isVisible, onBackdropPress, children }: any) => {
  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="bounceOut"
      animationOutTiming={300}
      animationInTiming={300}
      hasBackdrop
      useNativeDriverForBackdrop
      backdropOpacity={0}
      onBackdropPress={onBackdropPress}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
