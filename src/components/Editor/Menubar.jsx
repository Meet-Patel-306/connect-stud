import "../../editor.scss";

export default function Menubar({ editor }) {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div>
        <div className="flex flex-wrap justify-center">
          <div className="mx-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-1 border border-black h-8 w-8 rounded-l-md my-2 ml-2 mr-0 font-bold ${
                editor.isActive("bold")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              B
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 ${
                editor.isActive("italic")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i>I</i>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 ${
                editor.isActive("strike")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <strike>S</strike>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-1 border border-l-0 border-r-1 border-black h-8 w-8 rounded-r-md my-2 mx-0 ${
                editor.isActive("bulletList")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
          <div className="mx-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`p-1 border border-l-1 border-black h-8 w-auto rounded-l-md my-2 mx-0 ${
                editor.isActive("code")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <code>Code</code>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={`p-1 border border-l-0 border-black h-8 w-auto rounded-none my-2 mx-0 font-bold ${
                editor.isActive("paragraph")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              Paragraph
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`p-1 border border-l-0 border-black h-8 w-auto rounded-r-md my-2 mx-0 font-bold ${
                editor.isActive("blockquote")
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              Blockquote
            </button>
          </div>
          <div className="mx-1">
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`p-1 border border-l-1 border-black h-8 w-8 rounded-l-md my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 1 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H1
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 2 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H2
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 3 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H3
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 4 }).run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 4 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H4
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 5 }).run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 5 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H5
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 6 }).run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-r-md my-2 mx-0 font-bold ${
                editor.isActive("heading", { level: 6 })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              H6
            </button>
          </div>
          <div className="mx-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={`p-1 border border-l-1 border-black h-8 w-8 rounded-l-md my-2 mx-0 ${
                editor.isActive({ textAlign: "left" })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i className="fa-solid fa-align-left"></i>
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 ${
                editor.isActive({ textAlign: "center" })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i className="fa-solid fa-align-center"></i>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={`p-1 border border-l-0 border-r-1 border-black h-8 w-8 rounded-r-md my-2 mx-0 ${
                editor.isActive({ textAlign: "right" })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i className="fa-solid fa-align-right"></i>
            </button>
          </div>
          <div className="mx-1">
            <button
              type="button"
              onClick={() => editor.chain().focus().undo().run()}
              className={`p-1 border border-l-1 border-black h-8 w-auto rounded-l-md my-2 mx-0 bg-gray-50 font-bold`}
            >
              <i className="fa-solid fa-rotate-left mx-2"></i>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().redo().run()}
              className={`p-1 border border-l-0 border-black h-8 w-auto rounded-none my-2 mx-0 bg-gray-50 font-bold`}
            >
              <i className="fa-solid fa-rotate-right mx-2"></i>
            </button>
            <button
              type="button"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={`p-1 border border-l-0 border-black h-8 w-8 rounded-none my-2 mx-0 ${
                editor.isActive({ textAlign: "justify" })
                  ? "bg-[#5800CC] text-white"
                  : "bg-gray-50"
              }`}
            >
              <i className="fa-solid fa-align-justify"></i>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setContent("").run()}
              className="p-1 border border-l-0 border-black h-8 w-auto rounded-r-md my-2 mx-0 bg-gray-50"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
