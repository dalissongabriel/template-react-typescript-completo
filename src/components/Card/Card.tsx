interface CardProps {
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  maxWidth?: string;
}

const Card = ({
  backgroundColor,
  padding,
  borderRadius,
  maxWidth,
}: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: padding,
        borderRadius: borderRadius,
        maxWidth: maxWidth,
      }}
    >
      Card
    </div>
  );
};

Card.defaultProps = {
  backgroundColor: 'yellow',
  padding: '1rem',
  borderRadius: '0.5rem',
  maxWidth: '100%',
} as CardProps;

export default Card;
