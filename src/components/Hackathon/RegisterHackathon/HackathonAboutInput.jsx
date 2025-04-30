import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Menubar from "../../Editor/Menubar.jsx";
import Popover from "../../Profile/Popover.jsx";
import { useDispatch } from "react-redux";
import { getHackathonRegister } from "../../../features/hackathonRegisterSlice";

export default function HackathonAboutInput() {
  const [popover, setPopover] = useState(false);
  const dispatch2 = useDispatch();
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "",
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
    onUpdate: ({ editor }) =>
      dispatch2(
        getHackathonRegister({
          name: "hackathonAbout",
          value: editor.getHTML(),
        })
      ),
  });

  return (
    <>
      <div>
        <label
          htmlFor="hackathonInfo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hackathon's About
        </label>
        <Menubar editor={editor} />
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
          <EditorContent
            editor={editor}
            className="h-min-52 border rounded-md border-black text-gray-800 p-1 dark:text-white tiptap"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="registerLink"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hackathon's Register Link<span> (optional)</span>
          {/* '?' symbol */}
          <button
            type="button"
            onMouseEnter={() => setPopover(true)}
            onMouseLeave={() => setPopover(false)}
          >
            <svg
              className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {popover && (
            <Popover
              data={"if you don't like to use defalut register method"}
            />
          )}
        </label>
        <input
          type="email"
          name="registerLink"
          id="registerLink"
          className="input-tag"
          placeholder="John"
          autoComplete="off"
          onChange={(e) => {
            dispatch2(
              getHackathonRegister({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
        />
      </div>
    </>
  );
}
