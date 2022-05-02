import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        <div>
          <h4>{item.title}</h4>
          <img src={item.image} alt="img" />
          <h4>{item.category}</h4>
          <h3>{item.price}</h3>
        </div>
      </Flex>
    </>
  );
};
