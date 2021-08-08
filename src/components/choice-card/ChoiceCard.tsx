import { Container, IconBox, IconWrapper, Icon } from "./ChoiceCard.styles";
import { ChoiceItemModel } from "../../models/choice.interface";

interface ChoiceProps {
  data: ChoiceItemModel | undefined;
  status?: boolean | undefined;
  handleClick?: (val: number) => Promise<void>;
}

const ChoiceCard: React.FC<ChoiceProps> = ({
  data,
  handleClick,
  status,
}: ChoiceProps) => {
  return (
    <Container
      pointer={!!handleClick}
      onClick={() => handleClick && data && handleClick(data?.id)}
    >
      <IconBox status={status}>
        <IconWrapper>
          <Icon src={data?.icon} alt={data?.name} />
        </IconWrapper>
      </IconBox>
      <p>{data?.name}</p>
    </Container>
  );
};

export default ChoiceCard;
