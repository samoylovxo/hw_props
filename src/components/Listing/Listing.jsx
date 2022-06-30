import { getQuantityLevel, getPriceWithCurrency } from "../../helpers/utils";
import styled from "./Listing.module.css";

const Listing = (props) => {
  const { items } = props;

  return (
    <div className={styled.itemList}>
      {items.map((item) => {
        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        if (!MainImage) return null;

        const quantityLevel = getQuantityLevel(quantity);
        const priceWithCurrency = getPriceWithCurrency(price, currency_code);

        return (
          <div className={styled.item} key={listing_id}>
            <div className={styled.itemImage}>
              <a href={url}>
                <img src={MainImage.url_570xN} alt="" />
              </a>
            </div>
            <div className={styled.itemDetails}>
              <p className={styled.itemTitle}>{title}</p>
              <p className={styled.itemPrice}>{priceWithCurrency}</p>
              <p className={`${styled.itemQuantity} ${styled[quantityLevel]}`}>
                {quantity} left
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listing;
