import React from "react";
import Modal from "react-native-modal";

const ModalComponent = ({ isVisible, onBackButtonPress, children }: any) => {
  return (
    <Modal
      useNativeDriver
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="fadeOutDown"
      animationOutTiming={300}
      animationInTiming={300}
      hasBackdrop
      useNativeDriverForBackdrop
      onBackButtonPress={onBackButtonPress}
      backdropOpacity={0}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
