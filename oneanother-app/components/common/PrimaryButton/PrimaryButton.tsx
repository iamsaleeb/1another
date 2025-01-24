import { stylesApp } from "@/themes/app.styles";
import { styles } from "./styles";
import { Button } from "@rneui/base";

interface PrimaryButtonProps {
  text?: string;
  onPress?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onPress }) => {
  return (
    <Button
      containerStyle={styles.ctnButNext}
      buttonStyle={stylesApp.butPrimary}
      titleStyle={stylesApp.titleButPrimary}
      title={text}
      onPress={onPress}
    ></Button>
  );
};

export default PrimaryButton;
