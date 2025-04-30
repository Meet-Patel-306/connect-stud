import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";

export default function SocialMediaInput() {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);
  return (
    <>
      <div className="grid gap-3 mb-6 grid-cols-2">
        <div>
          <label
            htmlFor="instagram"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Instagram Profile
          </label>
          <input
            type="text"
            id="instagram"
            value={registerData?.instagram || ""}
            name="instagram"
            className="input-tag"
            placeholder="www.instagram.com/userid"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <label
            htmlFor="linkedin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Linkedin Profile
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={registerData?.linkedin || ""}
            className="input-tag"
            placeholder="www.linkedin.com/userid"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <label
            htmlFor="github"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Github Profile
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={registerData?.github || ""}
            className="input-tag"
            placeholder="www.github.com/userid"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
        <div>
          <label
            htmlFor="portfolio"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Portfolio Websute
          </label>
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            value={registerData?.portfolio || ""}
            className="input-tag"
            placeholder="www.website.com"
            autoComplete="off"
            onChange={(e) =>
              dispatch(
                getRegisterData({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
          />
        </div>
      </div>
    </>
  );
}
