import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEditor, EditorContent } from "@tiptap/react";
import Menubar from "../Editor/Menubar";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { newsPostRoutes } from "../../APIs/APIRoutes";
import axios from "axios";
import { toast } from "react-toastify";

export default function NewsCard() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [newsIntro, setNewsIntro] = useState("");
  const [title, setTitle] = useState("");
  const [newsContent, setNewsContent] = useState(
    "<blockquote><p><strong><em><s>meet</s></em></strong></p></blockquote>"
  );
  const [imageFile, setImageFile] = useState(null);
  const [country, setCountry] = useState("India");
  // user data
  const user = useSelector((state) => state.userData);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content:
      "<blockquote><p><strong><em><s>meet</s></em></strong></p></blockquote>",
    editorProps: {
      handleKeyDown(view, event) {
        const { state, dispatch } = view;
        const { selection } = state;
        // Indent on Tab
        if (event.key === "Tab" && !event.shiftKey) {
          event.preventDefault(); // Prevent default tab behavior
          const transaction = state.tr.insertText(
            "    ",
            selection.from,
            selection.to
          ); // Insert 4 spaces
          dispatch(transaction);
          return true;
        }
        // Outdent on Shift + Tab
        if (event.key === "Tab" && event.shiftKey) {
          event.preventDefault(); // Prevent default tab behavior

          const pos = selection.from;
          const textBefore = state.doc.textBetween(
            pos - 4,
            pos,
            undefined,
            "\0"
          );

          if (textBefore === "    ") {
            // Check if there are 4 spaces before the cursor
            const transaction = state.tr.delete(pos - 4, pos); // Remove 4 spaces
            dispatch(transaction);
          }
          return true;
        }
      },
      attributes: {
        spellcheck: "false",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(newsContent);
      setNewsContent(editor.getHTML());
    },
  });

  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    let date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);

    const news = {
      newsCategory: category,
      title: title,
      content: newsContent,
      newsIntro: newsIntro,
      ownerLocation: country,
      date: formattedDate,
      owner: user._id,
      ownerImage: user.ownerImage,
      ownerName: user.firstName + user.lastName,
    };
    // console.log(news);
    const formData = new FormData();
    formData.append("news", JSON.stringify(news));
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }
    try {
      const res = await axios.post(newsPostRoutes, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status == 201) {
        toast.success(res.data.message);
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCloseForm = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center px-4 mt-4">
        <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-xl">
          <div className="flex justify-end items-center ml-3">
            <button type="button" onClick={handleCloseForm}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <form onSubmit={handleNewsSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                News Category<span className="required-input">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="">Select a category</option>
                <option value="Politics">Politics</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Business">Business</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Science">Science</option>
                <option value="World">World</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Title<span className="required-input">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Content<span className="required-input">*</span>
              </label>
              <Menubar editor={editor} />
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
                <EditorContent
                  editor={editor}
                  className="h-min-52 border rounded-md border-black text-gray-800 p-1 dark:text-white tiptap"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                News Intro<span className="required-input">*</span>
              </label>
              <textarea
                placeholder="Enter content"
                value={newsIntro}
                onChange={(e) => setNewsIntro(e.target.value)}
                className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="countries"
                className="block text-sm font-semibold text-gray-800 dark:text-gray-200"
              >
                Select your country
              </label>
              <select
                id="countries"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Mexico">Mexico</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Panama">Panama</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="South Africa">South Africa</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Turkey">Turkey</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
