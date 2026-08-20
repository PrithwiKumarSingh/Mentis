import { useRef, useState, type FormEvent } from "react";
import { HiPencilSquare } from "react-icons/hi2";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Slide, toast } from "react-toastify";
import {motion} from "motion/react"
import {
  type ReactNode,
} from "react";
import { IoMdClose } from "react-icons/io";
type Category = "video" | "tweet" | "document" | "link";

const CATEGORIES: {
  id: Category;
  label: string;
  icon: string;
}[] = [
  { id: "video", label: "Video", icon: "▶" },
  { id: "tweet", label: "Tweet", icon: "𝕏" },
  { id: "document", label: "Docs", icon: "▣" },
  { id: "link", label: "Links", icon: "🔗" },
];

export function CreateContentModal({open, onClose,refresh}: {
    open : boolean;
    onClose : ()=>void;
    refresh : ()=>void;
}

) {
    const [title, setTitle] = useState("")
    const linkRef = useRef<HTMLInputElement> (null);
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState<Category>("video");

   async function handleSubmit(e:FormEvent){
        e.preventDefault();
        try{
            setLoading(true)
        const link = linkRef.current?.value;

        console.log(title + " " + link + " " + type);

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            type,
            title,
            link
            
        }, {withCredentials:true})
        onClose();
         refresh();
         toast("Create content successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
            setTitle("")
    }catch(err:any){
        toast("Input Missing...", {
                position : "bottom-right",
                theme : "colored",
                type : "error", 
                transition: Slide,
                autoClose : 3000
            })
    }finally{
        setLoading(false);
    }

    }

  return (
    <div>
    {
    open && <div 
        className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-40 ">
    <motion.form
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
      onSubmit={handleSubmit}
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-content-title"
      className="
        relative
        w-full
        max-w-110
        overflow-hidden
        rounded-[26px]
        border
        border-violet-400/20
        bg-white
        dark:bg-linear-to-br
        from-violet-950/90
        via-[#121426]
        to-[#080914]
        p-6
        shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]
      "
    >
      {/* Top glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-20
          h-56
          w-56
          rounded-full
          bg-violet-600/30
          blur-[80px]
        "
      />

      {/* Bottom glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-16
          h-48
          w-48
          rounded-full
          bg-indigo-600/20
          blur-[80px]
        "
      />

      {/* Header */}
      <header
        className="
          relative
          mb-6
          flex
          items-start
          justify-between
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-2xl
              bg-linear-to-br
              from-violet-500
              to-indigo-500
              text-lg
              text-white
              shadow-lg
              shadow-violet-500/20
            "
          >
            ✦
          </div>

          <div>
            <h2
              id="create-content-title"
              className="
                text-xl
                font-semibold
                tracking-tight
                text-blue-600
                dark:text-white
              "
            >
              Add to Mentis
            </h2>

            <p className="mt-1 text-xs text-black dark:text-zinc-400">
              Capture something into your second brain
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            text-zinc-400
            transition
            hover:bg-white/10
            hover:text-black
            dark:hover:text-white
            cursor-pointer
          "
        >
          <IoMdClose size={28}/>
        </button>
      </header>

      {/* Title */}
      <Field
        label="Title"
        htmlFor="cc-title"
        hint="What's this about?"
      >
        <div className="flex items-center   ">
        < HiPencilSquare className="text-gray-400"/>

        <input
          id="cc-title"
          defaultValue={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="A short, findable name"
          className="
            w-full
            bg-transparent
            py-3
            pl-2
            pr-3
            text-sm
            text-gray-900
            dark:text-white
            
            outline-none
            border-
            placeholder:text-zinc-500
          "
        />
        </div>
      </Field>

      {/* Link */}
      <div className="mt-4">
        <Field
          label="Link"
          htmlFor="cc-link"
          hint="Important!"
        >
        <div className="flex items-center">
          <LeadIcon>🔗</LeadIcon>

          <input
            id="cc-link"
            ref={linkRef}
            placeholder="https://..."
            inputMode="url"
            className="
              w-full
              bg-transparent
              py-3
              pl-2
              pr-3
              text-sm
              text-gray-900
              dark:text-white
              outline-none
              placeholder:text-zinc-500
            "
          />
          </div>
        </Field>
      </div>


      {/* Category */}
      <fieldset className="mt-5">
        <legend
          className="
            mb-3
            text-[11px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-zinc-500
          "
        >
          Category
        </legend>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((item) => {
            const active =
              type === item.id;

              console.log(item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setType(item.id)
                }
                aria-pressed={active}
                className={`
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  px-3.5
                  py-2
                  text-sm
                  font-medium
                  transition-all
                  duration-200
                  ${
                    active
                      ? `
                        border-violet-400/40
                        bg-linear-to-r
                        from-violet-600
                        to-indigo-600
                        text-white
                        shadow-lg
                        shadow-violet-600/20
                      `
                      : `
                        dark:border-white/10
                        border-black/40
                        bg-white/4
                        text-zinc-400
                        hover:border-violet-400/30
                        hover:bg-violet-500/10
                        hover:text-black
                        dark:hover:text-white
                        cursor-pointer
                      `
                  }
                `}
              >

                <span>{item.icon}</span>

                {item.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Preview */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/3
          px-3
          py-2.5
          text-xs
          dark:text-zinc-400
          text-zinc-800
        "
      >
        <span
          className="
            h-2
            w-2
            rounded-full
            bg-violet-500
            shadow-[0_0_12px_rgba(139,92,246,0.8)]
          "
        />

        <span>
          Saving as{" "}

          <span className="font-semibold text-black dark:text-white">
            {
              CATEGORIES.find(
                (item) =>
                  item.id === type
              )?.label
            }
          </span>

          {type.trim()
            ? ` · ${title
                .trim()
                .slice(0, 24)}${
                "prithwi ".trim().length > 24
                  ? "..."
                  : ""
              }`
            : " · untitled"}
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading ? true : false}
        className="
        disabled:cursor-not-allowed
          group
          relative
          mt-5
          w-full
          overflow-hidden
          rounded-2xl
          bg-linear-to-r
          from-violet-600
          to-indigo-600
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-violet-600/20
          transition
          hover:scale-[1.01]
          active:scale-[0.99]
          cursor-pointer
        "
      >
        <span
          className="
            relative
            z-10
            flex
            items-center
            justify-center
            gap-2
          "
        >
          Add to Mentis

          <span
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          >
        {
            loading ? <div className="h-4 w-4 border-3 ml-2 border-t-transparent rounded-full animate-spin"></div>
            : "→"
          }
          </span>
        </span>

        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-linear-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />
      </button>
    </motion.form>
    </div>
        }</div>
  );
}

function LeadIcon({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span
      className="
        grid
        h-5
        w-5
        shrink-0
        place-items-center
        text-sm
        text-violet-400
      "
    >
      {children}
    </span>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div
        className="
          mb-1.5
          flex
          items-center
          justify-between
          px-1
        "
      >
        <label
          htmlFor={htmlFor}
          className="
            text-xs
            font-medium
            text-zinc-400
          "
        >
          {label}
        </label>

        {hint && (
          <span className="text-[11px] text-zinc-600">
            {hint}
          </span>
        )}
      </div>

      <div
        className="
          flex
          items-start
          rounded-2xl
          border-white/10
          bg-white/4
          px-3
          transition
          border
          outline
          dark:outline-none
          focus-within:border-violet-400/50
          focus-within:bg-violet-500/4
          focus-within:ring-2
          focus-within:ring-violet-500/10
        "
      >
        {children}
      </div>
    </div>
  );
}


interface InputProps{
    placeholder : string; 
    referance? : any;
    value? : string;
}



export function Input({placeholder, referance, value}:InputProps){
    return(
        <div>
            <input defaultValue={value} ref={referance} placeholder={placeholder} type="text" className="px-4 w-full py-2 border rounded"/>
        </div>
    )
}