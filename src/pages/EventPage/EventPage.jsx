import { GlobalContext } from "../../providers/globalContext";
import { useContext } from "react";

import style from "./eventPage.module.css";

export const EventPage = () => {
  const { events, categories, locations } = useContext(GlobalContext);

  const event = events[0];

  const location = locations.find(
    (location) => location.id === event.location_id,
  );

  const category = categories.find(
    (category) => category.id === event.category_id,
  );

  const date = event?.date.slice(0, 10);

  function convertDateToBrazilianFormat(dateStr) {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  const formatedDate = convertDateToBrazilianFormat(date);

  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={event?.image} alt="event image" />
      </div>
      <div className={style.contentBox}>
        <div className={style.headerBox}>
          <h1 className={style.title}>{event?.name}</h1>
          <div className={style.categoryBox}>
            <p className={style.category}>{category?.name}</p>
          </div>
        </div>
        <div className={style.infoBox}>
          <p className={style.description}>{event?.description}</p>
          <p className={style.date}>{formatedDate}</p>
          <p className={style.location}>{location?.name}</p>
        </div>
      </div>
    </div>
  );
};
