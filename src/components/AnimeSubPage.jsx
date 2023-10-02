import { useState } from "react";
import SubPageNavBar from "./SubPageNavBar";
import Overview from "./Overview";
import Characters from "./Characters";
import Staff from "./Staff";
import Reviews from "./Reviews";
import OverviewManga from "./Overview-Manga";

const AnimeSubPage = ({ anime, filterCategory }) => {
  const [navBarOption, setNavBarOption] = useState("overview");
  const [characterList, setCharacterList] = useState(null);
  const [staffList, setStaffList] = useState(null);
  const [reviewList, setReviewList] = useState(null);

  console.log(filterCategory);
  return (
    <div className='sub-page-container'>
      <SubPageNavBar
        setNavBarOption={setNavBarOption}
        anime={anime}
        setCharacterList={setCharacterList}
        setStaffList={setStaffList}
        setReviewList={setReviewList}
        filterCategory={filterCategory}
      />
      {navBarOption == "overview" ? (
        filterCategory == "anime" ? (
          <Overview anime={anime} />
        ) : (
          <OverviewManga manga={anime} />
        )
      ) : navBarOption == "characters" ? (
        <Characters characterList={characterList} />
      ) : navBarOption == "staff" ? (
        <Staff staffList={staffList} filterCategory={filterCategory} />
      ) : (
        <Reviews reviewList={reviewList} />
      )}
    </div>
  );
};

export default AnimeSubPage;
