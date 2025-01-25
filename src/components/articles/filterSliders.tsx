import CustomSlider from "../../ui/customSlider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setPositiveReactionsCount, setReadingTimeMinutes } from "../../store/filters/filtersSlicer";

const Sliders = () => {
  const dispatch = useDispatch();

  const readingTime = useSelector((state: RootState) => state.filters.readingTimeMinutes);
  const reactions = useSelector((state: RootState) => state.filters.positiveReactionsCount);

  const handleReactions = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      dispatch(setPositiveReactionsCount(newValue));
    }
  };

  const handleReadingTime = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      dispatch(setReadingTimeMinutes(newValue));
    }
  };

  return (
    <>
      <CustomSlider
        min={0}
        max={50}
        step={1}
        text="Max Time to Read"
        value={readingTime}
        onChange={handleReadingTime}
      />
      <CustomSlider
        min={0}
        max={50}
        step={1}
        text="Max positive reaction count"
        value={reactions}
        onChange={handleReactions}
      />
    </>
  );
};

export default Sliders;
