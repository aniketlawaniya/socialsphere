import {
  MdOutlineHome,
  MdHome,
  MdOutlineBookmarkBorder,
  MdOutlinePersonOutline,
  MdOutlineExplore,
  MdOutlineBookmark,
  MdOutlineEdit,
  MdExplore,
  MdPerson,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openPostModal } from "../../features/post/postSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector(state => state.auth);

  const NAV_LINK_STYLES =
    "flex items-center justify-center xl:justify-start px-2 py-2 text-xl mb-3 w-fit rounded-[30rem] hover:bg-secondary-color-100 hover:dark:bg-secondary-color-dm-100";

  return (
    <aside className="sidebar col-span-1 hidden sm:flex flex-col gap-4 py-2 xl:p-3 w-20 xl:w-[250px] h-full fixed top-0">
      <header>
        <Link
          to="/home"
          className="text-primary-color-100 items-center flex w-full text-2xl relative mt-28"
        >
          <span className="hidden w-full px-3 xl:block absolute -bottom-1.5">Social Sphere</span>
        </Link>
      </header>

      <nav className="flex flex-col items-center xl:items-start gap-2">
        <NavLink to="/home" className={NAV_LINK_STYLES}>
          {({ isActive }) =>
            isActive ? (
              <>
                <div className="xl:mr-2 flex text-xl">
                  <MdHome />
                </div>
                <span className="hidden xl:block font-bold">Home</span>
              </>
            ) : (
              <>
                <div className="xl:mr-2 flex text-xl">
                  <MdOutlineHome />
                </div>
                <span className="hidden xl:block">Home</span>
              </>
            )
          }
        </NavLink>

        <NavLink to="/explore" className={NAV_LINK_STYLES}>
          {({ isActive }) =>
            isActive ? (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdExplore />
                </div>

                <span className="hidden xl:block font-bold">Explore</span>
              </>
            ) : (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdOutlineExplore />
                </div>

                <span className="hidden xl:block">Explore</span>
              </>
            )
          }
        </NavLink>

        <NavLink to="/bookmark" className={NAV_LINK_STYLES}>
          {({ isActive }) =>
            isActive ? (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdOutlineBookmark />
                </div>
                <span className="hidden xl:block font-bold">Bookmark</span>
              </>
            ) : (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdOutlineBookmarkBorder />
                </div>
                <span className="hidden xl:block">Bookmark</span>
              </>
            )
          }
        </NavLink>
        <NavLink to={`/profile/${userData?.username}`} className={NAV_LINK_STYLES}>
          {({ isActive }) =>
            isActive ? (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdPerson />
                </div>

                <span className="hidden xl:block font-bold">Profile</span>
              </>
            ) : (
              <>
                <div className="xl:mr-2 text-xl">
                  <MdOutlinePersonOutline />
                </div>

                <span className="hidden xl:block">Profile</span>
              </>
            )
          }
        </NavLink>
      </nav>

      <div className="hidden xl:block">
        <button
          onClick={() => {
            dispatch(openPostModal());
          }}
          className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 text-xl rounded-[30rem] p-2 w-3/4"
        >
          Post
        </button>
      </div>
      <div className="flex justify-center xl:hidden">
        <button
          onClick={() => dispatch(openPostModal())}
          className="bg-primary-color-100 hover:bg-primary-color-200 active:bg-primary-color-100 text-secondary-color-100 flex justify-center items-center  rounded-[50%] w-12 h-12 p-2 text-center "
        >
          <MdOutlineEdit />
        </button>
      </div>
    </aside>
  );
};

export { Sidebar };
