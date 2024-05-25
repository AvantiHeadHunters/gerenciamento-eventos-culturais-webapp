import { GlobalContext } from "../../providers/globalContext";
import { useContext } from "react";

import style from "./eventPage.module.css";
import { useParams } from "react-router-dom";

export const EventPage = () => {
  const { events, categories, locations } = useContext(GlobalContext);

  const { id } = useParams();

  const event = events.find((event) => event.id === parseInt(id));

  const location = locations.find(
    (location) => location.id === event.location_id,
  );

  const category = categories.find(
    (category) => category.id === event.category_id,
  );

  const date = event?.date.slice(0, 10);

  const convertDateToBrazilianFormat = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const formatedDate = convertDateToBrazilianFormat(date);

  return (
    <div className={style.container}>
      <div
        className={style.image}
        style={{ backgroundImage: `url(${event?.image})` }}
      ></div>
      <div className={style.contentBox}>
        <div className={style.eventBox}>
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
    </div>
  );
};
