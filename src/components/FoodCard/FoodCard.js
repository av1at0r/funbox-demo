import cn from "classnames";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from "react";
import cat from "../../images/cat.png";
import classes from "./FoodCard.module.scss";
export default function FoodCard({
  title,
  subtitle,
  description,
  weight,
  weightUnit,
  onClick,
  id,
  selected,
  className,
  detailDescription,
  disabled,
}) {
  const [lockHover, setLockHover] = useState(false);

  const [isMouseEntered, setIsMouseEntered] = useState(false);

  useEffect(() => {
    setLockHover(false);
  }, [isMouseEntered]);

  useLayoutEffect(() => {
    if (selected) {
      setLockHover(true);
    }
  }, [selected]);

  const handleMouseEnter = useCallback(() => {
    setIsMouseEntered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseEntered(false);
  }, []);

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div
      className={cn(classes.root, className, {
        [classes.selected]: selected,
        [classes.setLockHover]: lockHover,
        [classes.disabled]: disabled,
      })}
    >
      <button
        className={classes.card}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        disabled={disabled}
      >
        <div className={classes.background}>
          <div className={classes.topBorder}>
            <div className={classes.corner} />
            <div className={classes.filler} />
          </div>
          <img className={classes.catImage} src={cat} alt="Cat" />
        </div>
        <div className={classes.content}>
          <div
            className={cn(classes.tagline, {
              [classes.taglinePrimary]:
                !lockHover && selected && isMouseEntered,
            })}
          >
            {!lockHover && selected && isMouseEntered
              ? "Котэ не одобряет?"
              : "Сказочное заморское яство"}
          </div>
          <h2>
            <div className={classes.title}>{title}</div>
            <div className={classes.subtitle}>{subtitle}</div>
          </h2>
          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <p className={classes.weight}>
            <span className={classes.weightValue}>{weight}</span>
            <span className={classes.weightUnit}>{weightUnit}</span>
          </p>
        </div>
      </button>
      <p className={classes.underCardMessage}>
        {selected ? (
          detailDescription
        ) : disabled ? (
          `Печалька, ${subtitle} закончился.`
        ) : (
          <>
            Чего сидишь? Порадуй котэ,{" "}
            <button className={classes.buyButton} onClick={handleClick}>
              <span className={classes.buttonTextDashed}>купи</span>.
            </button>
          </>
        )}
      </p>
    </div>
  );
}
